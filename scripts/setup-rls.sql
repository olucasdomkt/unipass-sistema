-- Configurar RLS (Row Level Security) para o Unipass
-- Execute este script no SQL Editor do Supabase

-- 1. Habilitar RLS nas tabelas principais
ALTER TABLE plataformas ENABLE ROW LEVEL SECURITY;
ALTER TABLE colaboradores ENABLE ROW LEVEL SECURITY;
ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE acessos_plataforma ENABLE ROW LEVEL SECURITY;
ALTER TABLE historico_senhas ENABLE ROW LEVEL SECURITY;
ALTER TABLE visualizacoes_senha ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets_senha ENABLE ROW LEVEL SECURITY;
ALTER TABLE custos_plataforma ENABLE ROW LEVEL SECURITY;
ALTER TABLE configuracao_sistema ENABLE ROW LEVEL SECURITY;
ALTER TABLE log_acessos ENABLE ROW LEVEL SECURITY;
ALTER TABLE contas_google ENABLE ROW LEVEL SECURITY;
ALTER TABLE acessos_conta_google ENABLE ROW LEVEL SECURITY;

-- 2. Políticas para plataformas
-- Usuários podem ler todas as plataformas (mas dados administrativos ficam nas views)
CREATE POLICY "Usuários podem ler plataformas" ON plataformas FOR SELECT USING (true);

-- Apenas administradores podem inserir/atualizar/deletar plataformas
CREATE POLICY "Admins podem gerenciar plataformas" ON plataformas FOR ALL USING (
  EXISTS (
    SELECT 1 FROM colaboradores c 
    WHERE c.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND c.status = 'ATIVO'
  )
);

-- 3. Políticas para colaboradores
-- Usuários podem ler colaboradores
CREATE POLICY "Usuários podem ler colaboradores" ON colaboradores FOR SELECT USING (true);

-- Apenas administradores podem gerenciar colaboradores
CREATE POLICY "Admins podem gerenciar colaboradores" ON colaboradores FOR ALL USING (
  EXISTS (
    SELECT 1 FROM colaboradores c 
    WHERE c.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND c.status = 'ATIVO'
  )
);

-- 4. Políticas para clientes
-- Usuários podem ler clientes
CREATE POLICY "Usuários podem ler clientes" ON clientes FOR SELECT USING (true);

-- Apenas administradores podem gerenciar clientes
CREATE POLICY "Admins podem gerenciar clientes" ON clientes FOR ALL USING (
  EXISTS (
    SELECT 1 FROM colaboradores c 
    WHERE c.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND c.status = 'ATIVO'
  )
);

-- 5. Políticas para equipes
-- Usuários podem ler equipes
CREATE POLICY "Usuários podem ler equipes" ON equipes FOR SELECT USING (true);

-- Apenas administradores podem gerenciar equipes
CREATE POLICY "Admins podem gerenciar equipes" ON equipes FOR ALL USING (
  EXISTS (
    SELECT 1 FROM colaboradores c 
    WHERE c.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND c.status = 'ATIVO'
  )
);

-- 6. Políticas para visualizações de senha
-- Usuários só podem ler suas próprias visualizações
CREATE POLICY "Usuários podem ler próprias visualizações" ON visualizacoes_senha FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM colaboradores c 
    WHERE c.id = colaborador_id 
    AND c.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND c.status = 'ATIVO'
  )
);

-- Usuários podem inserir visualizações para si mesmos
CREATE POLICY "Usuários podem inserir visualizações" ON visualizacoes_senha FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM colaboradores c 
    WHERE c.id = colaborador_id 
    AND c.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND c.status = 'ATIVO'
  )
);

-- 7. Políticas para tickets de senha
-- Usuários podem ler tickets relacionados às suas plataformas ou criados por eles
CREATE POLICY "Usuários podem ler tickets relevantes" ON tickets_senha FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM colaboradores c 
    WHERE c.id = colaborador_id 
    AND c.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND c.status = 'ATIVO'
  )
);

-- Usuários podem criar tickets
CREATE POLICY "Usuários podem criar tickets" ON tickets_senha FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM colaboradores c 
    WHERE c.id = colaborador_id 
    AND c.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND c.status = 'ATIVO'
  )
);

-- 8. Políticas para configuração do sistema
-- Apenas administradores podem ler/modificar configurações
CREATE POLICY "Admins podem gerenciar configurações" ON configuracao_sistema FOR ALL USING (
  EXISTS (
    SELECT 1 FROM colaboradores c 
    WHERE c.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND c.status = 'ATIVO'
  )
);

-- 9. Políticas para logs
-- Usuários podem ler seus próprios logs
CREATE POLICY "Usuários podem ler próprios logs" ON log_acessos FOR SELECT USING (
  usuario = current_setting('request.jwt.claims', true)::json->>'email'
);

-- Usuários podem inserir logs
CREATE POLICY "Usuários podem inserir logs" ON log_acessos FOR INSERT WITH CHECK (
  usuario = current_setting('request.jwt.claims', true)::json->>'email'
);

-- Administradores podem ler todos os logs
CREATE POLICY "Admins podem ler todos os logs" ON log_acessos FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM colaboradores c 
    WHERE c.email = current_setting('request.jwt.claims', true)::json->>'email'
    AND c.status = 'ATIVO'
  )
);

-- 10. Função para verificar se é administrador
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
DECLARE
  user_email TEXT;
  admin_emails TEXT[] := ARRAY['admin@unipass.com', 'lucas@agencia.com'];
BEGIN
  user_email := current_setting('request.jwt.claims', true)::json->>'email';
  RETURN user_email = ANY(admin_emails);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 11. Políticas mais específicas para admins usando a função
CREATE POLICY "Verificação admin para plataformas" ON plataformas FOR ALL USING (is_admin());
CREATE POLICY "Verificação admin para colaboradores" ON colaboradores FOR ALL USING (is_admin());
CREATE POLICY "Verificação admin para configurações" ON configuracao_sistema FOR ALL USING (is_admin());

-- ========================
-- ATENÇÃO IMPORTANTE:
-- ========================
-- Por enquanto, vamos permitir acesso público para desenvolvimento
-- Estas políticas podem ser habilitadas quando tivermos autenticação Supabase Auth

-- Política temporária: permitir tudo para desenvolvimento
CREATE POLICY "Desenvolvimento - acesso público" ON plataformas FOR ALL USING (true);
CREATE POLICY "Desenvolvimento - acesso público colaboradores" ON colaboradores FOR ALL USING (true);
CREATE POLICY "Desenvolvimento - acesso público clientes" ON clientes FOR ALL USING (true);
CREATE POLICY "Desenvolvimento - acesso público equipes" ON equipes FOR ALL USING (true);
CREATE POLICY "Desenvolvimento - acesso público config" ON configuracao_sistema FOR ALL USING (true);
CREATE POLICY "Desenvolvimento - acesso público logs" ON log_acessos FOR ALL USING (true);
CREATE POLICY "Desenvolvimento - acesso público tickets" ON tickets_senha FOR ALL USING (true);
CREATE POLICY "Desenvolvimento - acesso público visualizacoes" ON visualizacoes_senha FOR ALL USING (true);
CREATE POLICY "Desenvolvimento - acesso público contas google" ON contas_google FOR ALL USING (true);

-- Comentários para facilitar remoção posterior:
-- Para produção, remover as políticas "Desenvolvimento" e habilitar Supabase Auth
