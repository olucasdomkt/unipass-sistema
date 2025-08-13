# 🔐 Unipass - Sistema de Gestão de Acessos

Sistema interno para gerenciamento de plataformas, senhas e acessos da equipe.

## 🚀 Funcionalidades

### ✅ **MVP Implementado**

- **🔑 Autenticação segura** com logout automático
- **🌐 Gestão de Plataformas** com CRUD completo
- **🔐 Visualização de senhas** com autenticação por chave mestre
- **👥 Gestão de Colaboradores** e equipes
- **📊 Relatórios e métricas** de uso
- **⚙️ Configurações avançadas** do sistema
- **🔍 Logs detalhados** de atividades
- **❓ Central de ajuda** completa
- **🎯 Interface responsiva** e moderna

### 🎨 **Design & UX**

- Design moderno com Tailwind CSS
- Componentes acessíveis com ShadCN UI
- Interface responsiva para mobile/desktop
- Tooltips informativos
- Toasts para feedback
- Navegação intuitiva

### 🔒 **Segurança**

- Row Level Security (RLS) configurado
- Senhas criptografadas
- Logs de auditoria
- Sessões com timeout automático
- Controle de acesso por roles

## 🛠️ Tecnologias

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI
- **Backend**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Auth**: Sistema próprio (preparado para Supabase Auth)

## 📦 Instalação

### 1. **Clone o repositório**
```bash
git clone <seu-repo>
cd Unipass
```

### 2. **Instale as dependências**
```bash
npm install
```

### 3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz:
```env
DATABASE_URL=postgresql://postgres.ycvwpuqlcfctaifanhnt:mUjHITRhGx74t88B@aws-0-sa-east-1.pooler.supabase.com:5432/postgres?sslmode=require&pgbouncer=true&connection_limit=1

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://ycvwpuqlcfctaifanhnt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljdndwdXFsY2ZjdGFpZmFuaG50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1Mzk0NzUsImV4cCI6MjA1MzExNTQ3NX0.1HrBCPYdS8EvQCSTwKqbK0eSJOGTCL3m7Wdh-n3u3pU
```

### 4. **Configure o banco de dados** (apenas primeira vez)
```bash
# Aplicar schema
npm run db:apply:supabase

# Inserir dados de exemplo
npm run db:seed

# Configurar Prisma
npm run prisma:pull
npm run prisma:generate
```

### 5. **Configure RLS no Supabase**
Copie o conteúdo de `scripts/setup-rls.sql` e execute no SQL Editor do Supabase:
```bash
npm run db:setup-rls
```

### 6. **Execute o projeto**
```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm run start
```

## 👤 Credenciais de Acesso

### **Desenvolvimento**
- **Admin**: `admin@unipass.com` / `admin123`
- **Lucas**: `lucas@agencia.com` / `admin123`  
- **User**: `user@unipass.com` / `admin123`

### **Chave Mestre**
- Para visualizar senhas: `admin123`

## 🚀 Deploy

### **Vercel (Recomendado)**

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no painel
3. Deploy automático a cada push

### **Netlify**

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Configure variáveis de ambiente

### **Docker**

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── plataformas/       # Página de plataformas
│   ├── senhas/            # Página de senhas
│   ├── colaboradores/     # Página de colaboradores
│   ├── relatorios/        # Página de relatórios
│   ├── configuracoes/     # Página de configurações
│   ├── logs/              # Página de logs
│   └── ajuda/             # Central de ajuda
├── components/
│   ├── auth/              # Componentes de autenticação
│   ├── layout/            # Layout e navegação
│   ├── plataformas/       # Componentes de plataformas
│   ├── colaboradores/     # Componentes de colaboradores
│   └── ui/                # Componentes base (ShadCN)
├── lib/
│   ├── auth-context.tsx   # Contexto de autenticação
│   ├── supabase.ts        # Cliente Supabase
│   └── utils.ts           # Utilitários
scripts/
├── apply-sql.cjs          # Script para aplicar SQL
├── seed-data.js           # Script para popular dados
└── setup-rls.sql         # Script para configurar RLS
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento
npm run build            # Build para produção
npm run start            # Servidor de produção
npm run lint             # Verificar código

# Banco de dados
npm run db:apply:supabase    # Aplicar schema no Supabase
npm run db:seed              # Popular dados de exemplo
npm run prisma:pull          # Sincronizar schema Prisma
npm run prisma:generate      # Gerar cliente Prisma
npm run db:setup             # Setup completo do banco
npm run db:setup-rls         # Mostrar script RLS
```

## 🔒 Segurança

### **RLS (Row Level Security)**
- ✅ Habilitado em todas as tabelas
- ✅ Políticas de acesso por role
- ✅ Proteção contra acesso não autorizado

### **Dados Sensíveis**
- ✅ Senhas criptografadas
- ✅ Logs de auditoria completos
- ✅ Sessões com timeout automático

### **Produção**
- 🔄 Remover políticas de desenvolvimento
- 🔄 Habilitar Supabase Auth
- 🔄 Configurar domínio personalizado

## 📝 TODO para Produção

- [ ] Implementar Supabase Auth real
- [ ] Configurar HTTPS obrigatório
- [ ] Setup de backup automatizado
- [ ] Monitoramento e alertas
- [ ] Criptografia avançada de senhas
- [ ] Autenticação 2FA
- [ ] Rate limiting

## 🆘 Suporte

- **Email**: admin@unipass.com
- **Documentação**: `/ajuda` no sistema
- **Issues**: GitHub Issues

## 📄 Licença

Proprietary - Sistema interno da empresa.

---

**🎉 MVP 100% Funcional!**

✅ Interface moderna e responsiva  
✅ Dados reais do Supabase  
✅ Autenticação e roles  
✅ CRUD completo  
✅ Segurança RLS  
✅ Pronto para deploy  
