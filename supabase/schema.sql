-- Extensões necessárias
create extension if not exists "pgcrypto";
create extension if not exists "uuid-ossp";

-- Função utilitária para updated_at
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- =========================
-- Enums
-- =========================
do $$ begin
  create type status_colaborador as enum ('ATIVO','DEMITIDO','SUSPENSO');
exception when duplicate_object then null; end $$;

do $$ begin
  create type tipo_plataforma as enum ('MIDIA','CRM','DOMINIO','EMAIL','DESIGN','GESTAO','ANALISE','HOSPEDAGEM','OUTROS');
exception when duplicate_object then null; end $$;

do $$ begin
  create type vinculo_plataforma as enum ('UNICO','CLIENTE');
exception when duplicate_object then null; end $$;

do $$ begin
  create type status_ticket as enum ('ABERTO','EM_ANDAMENTO','RESOLVIDO','CANCELADO');
exception when duplicate_object then null; end $$;

do $$ begin
  create type tipo_pagamento as enum ('MENSAL','ANUAL');
exception when duplicate_object then null; end $$;

-- =========================
-- Tabelas base
-- =========================
create table if not exists clientes (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text,
  telefone text,
  ativo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_clientes_updated_at before update on clientes
for each row execute function set_updated_at();

create table if not exists equipes (
  id uuid primary key default gen_random_uuid(),
  nome text not null unique,
  ativa boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_equipes_updated_at before update on equipes
for each row execute function set_updated_at();

create table if not exists colaboradores (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null unique,
  equipe_id uuid references equipes(id) on delete set null,
  status status_colaborador not null default 'ATIVO',
  data_entrada timestamptz not null default now(),
  data_saida timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_colaboradores_updated_at before update on colaboradores
for each row execute function set_updated_at();

-- Opcional (mapeia usuário de auth → colaborador) para RLS futuro
create table if not exists usuarios_auth (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique, -- referenciará auth.users.id quando ativarmos Supabase Auth
  colaborador_id uuid not null unique references colaboradores(id) on delete cascade,
  role text not null default 'user' -- 'admin' | 'user'
);

-- Conta Google separada (visualização com permissão própria)
create table if not exists contas_google (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  senha_encriptada text, -- armazenar segura/criptografada
  observacoes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_contas_google_updated_at before update on contas_google
for each row execute function set_updated_at();

create table if not exists plataformas (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  tipo tipo_plataforma not null,
  url_login text,
  email_utilizado text,
  senha_encriptada text, -- armazenar segura/criptografada
  custo_mensal numeric not null default 0,
  ultima_atualizacao_senha timestamptz not null default now(),
  frequencia_atualizacao int not null default 90, -- dias
  observacoes text,

  vinculo vinculo_plataforma not null default 'UNICO',
  cliente_id uuid references clientes(id) on delete set null,

  -- Melhor UX visual
  favicon_url text,

  -- Login via Google
  login_via_google boolean not null default false,
  google_email text,
  conta_google_id uuid references contas_google(id) on delete set null,

  -- Campos administrativos (visíveis só a admin)
  tipo_pagamento tipo_pagamento,
  valor_ferramenta numeric,
  data_assinatura date,
  quem_assinou text,
  motivo_uso text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_plataformas_cliente on plataformas(cliente_id);
create index if not exists idx_plataformas_tipo on plataformas(tipo);
create trigger trg_plataformas_updated_at before update on plataformas
for each row execute function set_updated_at();

create table if not exists acessos_plataforma (
  id uuid primary key default gen_random_uuid(),
  colaborador_id uuid not null references colaboradores(id) on delete cascade,
  plataforma_id uuid not null references plataformas(id) on delete cascade,
  data_inicio timestamptz not null default now(),
  data_fim timestamptz,
  ativo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (colaborador_id, plataforma_id)
);
create index if not exists idx_acesso_plataforma_plat on acessos_plataforma(plataforma_id);
create trigger trg_acessos_plataforma_updated_at before update on acessos_plataforma
for each row execute function set_updated_at();

-- Permissão específica para conta Google
create table if not exists acessos_conta_google (
  id uuid primary key default gen_random_uuid(),
  colaborador_id uuid not null references colaboradores(id) on delete cascade,
  conta_google_id uuid not null references contas_google(id) on delete cascade,
  ativo boolean not null default true,
  created_at timestamptz not null default now(),
  unique (colaborador_id, conta_google_id)
);

create table if not exists historico_senhas (
  id uuid primary key default gen_random_uuid(),
  plataforma_id uuid not null references plataformas(id) on delete cascade,
  colaborador_id uuid references colaboradores(id) on delete set null,
  senha_anterior text,
  nova_senha text,
  motivo_mudanca text,
  data_alteracao timestamptz not null default now(),
  notificou_colaboradores boolean not null default false,
  tipo_notificacao text, -- 'email', 'discord', 'ambos'
  created_at timestamptz not null default now()
);
create index if not exists idx_hist_plat on historico_senhas(plataforma_id);

create table if not exists visualizacoes_senha (
  id uuid primary key default gen_random_uuid(),
  plataforma_id uuid not null references plataformas(id) on delete cascade,
  colaborador_id uuid not null references colaboradores(id) on delete cascade,
  data_visualizacao timestamptz not null default now(),
  ip text,
  user_agent text
);
create index if not exists idx_visu_plat on visualizacoes_senha(plataforma_id);
create index if not exists idx_visu_colab on visualizacoes_senha(colaborador_id);

create table if not exists tickets_senha (
  id uuid primary key default gen_random_uuid(),
  plataforma_id uuid not null references plataformas(id) on delete cascade,
  colaborador_id uuid not null references colaboradores(id) on delete cascade,
  descricao_problema text not null,
  status status_ticket not null default 'ABERTO',
  data_abertura timestamptz not null default now(),
  data_resolucao timestamptz,
  observacoes_resolucao text
);
create index if not exists idx_ticket_plat on tickets_senha(plataforma_id);
create index if not exists idx_ticket_status on tickets_senha(status);

create table if not exists custos_plataforma (
  id uuid primary key default gen_random_uuid(),
  plataforma_id uuid not null references plataformas(id) on delete cascade,
  valor numeric not null,
  moeda text not null default 'BRL',
  data_inicio date not null,
  data_fim date,
  ativo boolean not null default true,
  observacoes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_custos_plat_updated_at before update on custos_plataforma
for each row execute function set_updated_at();

create table if not exists configuracao_sistema (
  id uuid primary key default gen_random_uuid(),
  chave_mestre text,
  webhook_clickup text,
  webhook_discord text,
  email_alertas text,
  api_key_email text,
  dias_aviso_expiracao int not null default 7,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger trg_conf_sis_updated_at before update on configuracao_sistema
for each row execute function set_updated_at();

create table if not exists log_acessos (
  id uuid primary key default gen_random_uuid(),
  usuario text not null, -- pode ser email do colaborador
  acao text not null,
  entidade text not null, -- 'plataforma','colaborador',...
  entidade_id uuid,
  ip text,
  user_agent text,
  timestamp timestamptz not null default now()
);

-- =========================
-- Views para esconder campos sensíveis de não-admin
-- =========================
create or replace view v_plataformas_public as
select
  p.id, p.nome, p.tipo, p.url_login, p.email_utilizado,
  p.ultima_atualizacao_senha, p.frequencia_atualizacao,
  p.observacoes, p.vinculo, p.cliente_id,
  p.favicon_url, p.login_via_google, p.google_email, p.conta_google_id,
  p.created_at, p.updated_at
from plataformas p;

create or replace view v_plataformas_admin as
select * from plataformas;

-- =========================
-- (Opcional) RLS - deixe para ativar após integrar Supabase Auth
-- =========================
-- alter table plataformas enable row level security;
-- alter table acessos_plataforma enable row level security;
-- alter table tickets_senha enable row level security;
-- alter table visualizacoes_senha enable row level security;
-- alter table contas_google enable row level security;
-- alter table acessos_conta_google enable row level security;
-- alter table historico_senhas enable row level security;

-- Exemplo de política: somente quem tem acesso pode abrir ticket da plataforma
-- create policy "user_can_create_ticket_for_owned_access"
-- on tickets_senha for insert
-- using (
--   exists (
--     select 1 from usuarios_auth ua
--     join acessos_plataforma ap on ap.colaborador_id = ua.colaborador_id and ap.plataforma_id = tickets_senha.plataforma_id and ap.ativo
--     where ua.auth_user_id = auth.uid()
--   )
-- );

-- Exemplo: admin pode ver v_plataformas_admin (se usar claim 'role'='admin')
-- create policy "admin_select_plataformas_admin"
-- on v_plataformas_admin for select
-- using (coalesce((current_setting('request.jwt.claims', true)::jsonb ->> 'role') = 'admin', false));

-- Usuários comuns veem apenas v_plataformas_public (ou criamos política na tabela)


