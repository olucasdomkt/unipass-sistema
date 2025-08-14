const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Variáveis de ambiente do Supabase não encontradas')
  console.error('SUPABASE_URL:', supabaseUrl ? 'OK' : 'MISSING')
  console.error('SUPABASE_KEY:', supabaseKey ? 'OK' : 'MISSING')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function seedData() {
  console.log('🌱 Iniciando seed de dados...')

  try {
    // 1. Inserir equipes
    console.log('📋 Inserindo equipes...')
    const { data: equipes, error: equipesError } = await supabase
      .from('equipes')
      .insert([
        { nome: 'Administração', ativa: true },
        { nome: 'Desenvolvimento', ativa: true },
        { nome: 'Performance', ativa: true },
        { nome: 'Design', ativa: true },
        { nome: 'Atendimento', ativa: true }
      ])
      .select()

    if (equipesError) {
      console.log('Equipes já existem, pulando...')
    } else {
      console.log('✅ Equipes inseridas')
    }

    // 2. Inserir clientes
    console.log('🏢 Inserindo clientes...')
    const { data: clientes, error: clientesError } = await supabase
      .from('clientes')
      .insert([
        { nome: 'Cliente ABC Ltda', email: 'contato@clienteabc.com', telefone: '(11) 99999-0001', ativo: true },
        { nome: 'Empresa XYZ S.A.', email: 'admin@empresaxyz.com', telefone: '(11) 99999-0002', ativo: true },
        { nome: 'Startup Innovation', email: 'hello@startupinnovation.com', telefone: '(11) 99999-0003', ativo: true }
      ])
      .select()

    if (clientesError) {
      console.log('Clientes já existem, pulando...')
    } else {
      console.log('✅ Clientes inseridos')
    }

    // 3. Buscar equipes e clientes para usar os IDs
    const { data: equipesExistentes } = await supabase
      .from('equipes')
      .select('id, nome')
      .limit(5)

    const { data: clientesExistentes } = await supabase
      .from('clientes')
      .select('id, nome')
      .limit(3)

    const adminEquipeId = equipesExistentes?.find(e => e.nome === 'Administração')?.id
    const devEquipeId = equipesExistentes?.find(e => e.nome === 'Desenvolvimento')?.id
    const performanceEquipeId = equipesExistentes?.find(e => e.nome === 'Performance')?.id

    const clienteABCId = clientesExistentes?.find(c => c.nome === 'Cliente ABC Ltda')?.id

    // 4. Inserir colaboradores
    console.log('👥 Inserindo colaboradores...')
    const { data: colaboradores, error: colaboradoresError } = await supabase
      .from('colaboradores')
      .insert([
        {
          nome: 'Administrador',
          email: 'admin@unipass.com',
          equipe_id: adminEquipeId,
          status: 'ATIVO',
          data_entrada: '2023-01-15T10:00:00Z'
        },
        {
          nome: 'Lucas Agência',
          email: 'lucas@agencia.com',
          equipe_id: devEquipeId,
          status: 'ATIVO',
          data_entrada: '2023-01-01T10:00:00Z'
        },
        {
          nome: 'Usuário Demo',
          email: 'user@unipass.com',
          equipe_id: performanceEquipeId,
          status: 'ATIVO',
          data_entrada: '2023-02-01T10:00:00Z'
        }
      ])
      .select()

    if (colaboradoresError) {
      console.log('Colaboradores já existem, pulando...')
    } else {
      console.log('✅ Colaboradores inseridos')
    }

    // 5. Inserir contas Google
    console.log('🔐 Inserindo contas Google...')
    const { data: contasGoogle, error: contasGoogleError } = await supabase
      .from('contas_google')
      .insert([
        {
          email: 'agencia@gmail.com',
          senha_encriptada: 'GoogleAccount@123',
          observacoes: 'Conta principal da agência'
        }
      ])
      .select()

    if (contasGoogleError) {
      console.log('Contas Google já existem, pulando...')
    } else {
      console.log('✅ Contas Google inseridas')
    }

    // 6. Inserir plataformas
    console.log('🌐 Inserindo plataformas...')
    const { data: plataformas, error: plataformasError } = await supabase
      .from('plataformas')
      .insert([
        {
          nome: 'Google Ads',
          tipo: 'MIDIA',
          url_login: 'https://ads.google.com',
          email_utilizado: 'ads@agencia.com',
          senha_encriptada: 'MinhaSenh@123',
          custo_mensal: 0,
          ultima_atualizacao_senha: '2024-06-15T10:00:00Z',
          frequencia_atualizacao: 90,
          observacoes: 'Conta principal da agência',
          vinculo: 'UNICO',
          cliente_id: null,
          favicon_url: 'https://ads.google.com/favicon.ico',
          login_via_google: false,
          tipo_pagamento: 'MENSAL',
          valor_ferramenta: 0,
          quem_assinou: 'Administrador',
          motivo_uso: 'Gestão de campanhas pagas'
        },
        {
          nome: 'Meta Business',
          tipo: 'MIDIA',
          url_login: 'https://business.facebook.com',
          email_utilizado: 'meta@agencia.com',
          senha_encriptada: 'MetaPass@456',
          custo_mensal: 0,
          ultima_atualizacao_senha: '2024-04-20T10:00:00Z',
          frequencia_atualizacao: 90,
          observacoes: 'Gerenciamento de campanhas Facebook e Instagram',
          vinculo: 'CLIENTE',
          cliente_id: clienteABCId,
          favicon_url: 'https://business.facebook.com/favicon.ico',
          login_via_google: false,
          tipo_pagamento: 'MENSAL',
          valor_ferramenta: 0,
          quem_assinou: 'Cliente ABC',
          motivo_uso: 'Campanhas de mídia social'
        },
        {
          nome: 'RD Station',
          tipo: 'CRM',
          url_login: 'https://app.rdstation.com.br',
          email_utilizado: 'crm@agencia.com',
          senha_encriptada: 'RdStation@789',
          custo_mensal: 299.90,
          ultima_atualizacao_senha: '2024-01-10T10:00:00Z',
          frequencia_atualizacao: 90,
          observacoes: 'Automação de marketing',
          vinculo: 'UNICO',
          cliente_id: null,
          favicon_url: 'https://app.rdstation.com.br/favicon.ico',
          login_via_google: false,
          tipo_pagamento: 'MENSAL',
          valor_ferramenta: 299.90,
          quem_assinou: 'Administrador',
          motivo_uso: 'Automação e CRM'
        },
        {
          nome: 'Figma',
          tipo: 'DESIGN',
          url_login: 'https://www.figma.com',
          email_utilizado: 'design@agencia.com',
          senha_encriptada: 'FigmaDesign@101',
          custo_mensal: 12.00,
          ultima_atualizacao_senha: '2024-06-01T10:00:00Z',
          frequencia_atualizacao: 90,
          observacoes: 'Design colaborativo',
          vinculo: 'UNICO',
          cliente_id: null,
          favicon_url: 'https://www.figma.com/favicon.ico',
          login_via_google: true,
          google_email: 'design@agencia.com',
          tipo_pagamento: 'MENSAL',
          valor_ferramenta: 12.00,
          quem_assinou: 'Design Team',
          motivo_uso: 'Prototipagem e design'
        },
        {
          nome: 'ClickUp',
          tipo: 'GESTAO',
          url_login: 'https://app.clickup.com',
          email_utilizado: 'gestao@agencia.com',
          senha_encriptada: 'ClickUp@2024',
          custo_mensal: 49.00,
          ultima_atualizacao_senha: '2024-05-15T10:00:00Z',
          frequencia_atualizacao: 90,
          observacoes: 'Gestão de projetos da equipe',
          vinculo: 'UNICO',
          cliente_id: null,
          favicon_url: 'https://app.clickup.com/favicon.ico',
          login_via_google: false,
          tipo_pagamento: 'MENSAL',
          valor_ferramenta: 49.00,
          quem_assinou: 'Administrador',
          motivo_uso: 'Gestão de projetos e tarefas'
        },
        {
          nome: 'Canva Pro',
          tipo: 'DESIGN',
          url_login: 'https://www.canva.com',
          email_utilizado: 'canva@agencia.com',
          senha_encriptada: 'CanvaPro@456',
          custo_mensal: 14.99,
          ultima_atualizacao_senha: '2024-03-20T10:00:00Z',
          frequencia_atualizacao: 90,
          observacoes: 'Design rápido para redes sociais',
          vinculo: 'CLIENTE',
          cliente_id: clienteABCId,
          favicon_url: 'https://www.canva.com/favicon.ico',
          login_via_google: true,
          google_email: 'canva@agencia.com',
          tipo_pagamento: 'MENSAL',
          valor_ferramenta: 14.99,
          quem_assinou: 'Cliente ABC',
          motivo_uso: 'Criação de materiais visuais'
        },
        {
          nome: 'Google Analytics',
          tipo: 'ANALISE',
          url_login: 'https://analytics.google.com',
          email_utilizado: 'analytics@agencia.com',
          senha_encriptada: 'Analytics@789',
          custo_mensal: 0,
          ultima_atualizacao_senha: '2024-05-01T10:00:00Z',
          frequencia_atualizacao: 90,
          observacoes: 'Análise de tráfego e conversões',
          vinculo: 'UNICO',
          cliente_id: null,
          favicon_url: 'https://analytics.google.com/favicon.ico',
          login_via_google: true,
          google_email: 'analytics@agencia.com',
          tipo_pagamento: 'MENSAL',
          valor_ferramenta: 0,
          quem_assinou: 'Administrador',
          motivo_uso: 'Análise de performance'
        },
        {
          nome: 'Hotjar',
          tipo: 'ANALISE',
          url_login: 'https://insights.hotjar.com',
          email_utilizado: 'hotjar@agencia.com',
          senha_encriptada: 'Hotjar@2024',
          custo_mensal: 89.00,
          ultima_atualizacao_senha: '2024-02-15T10:00:00Z',
          frequencia_atualizacao: 120,
          observacoes: 'Heatmaps e gravações de sessão',
          vinculo: 'UNICO',
          cliente_id: null,
          favicon_url: 'https://insights.hotjar.com/favicon.ico',
          login_via_google: false,
          tipo_pagamento: 'MENSAL',
          valor_ferramenta: 89.00,
          quem_assinou: 'Administrador',
          motivo_uso: 'UX Analytics'
        },
        {
          nome: 'Mailchimp',
          tipo: 'EMAIL',
          url_login: 'https://login.mailchimp.com',
          email_utilizado: 'email@agencia.com',
          senha_encriptada: 'Mailchimp@123',
          custo_mensal: 299.00,
          ultima_atualizacao_senha: '2024-04-10T10:00:00Z',
          frequencia_atualizacao: 60,
          observacoes: 'Email marketing para clientes',
          vinculo: 'UNICO',
          cliente_id: null,
          favicon_url: 'https://login.mailchimp.com/favicon.ico',
          login_via_google: false,
          tipo_pagamento: 'MENSAL',
          valor_ferramenta: 299.00,
          quem_assinou: 'Administrador',
          motivo_uso: 'Campanhas de email marketing'
        }
      ])
      .select()

    if (plataformasError) {
      console.log('Plataformas já existem, pulando...')
    } else {
      console.log('✅ Plataformas inseridas')
    }

    // 7. Inserir configuração do sistema
    console.log('⚙️ Inserindo configuração do sistema...')
    const { data: config, error: configError } = await supabase
      .from('configuracao_sistema')
      .insert([
        {
          chave_mestre: 'admin123',
          webhook_clickup: '',
          webhook_discord: '',
          email_alertas: 'admin@unipass.com',
          api_key_email: '',
          dias_aviso_expiracao: 7
        }
      ])
      .select()

    if (configError) {
      console.log('Configuração já existe, pulando...')
    } else {
      console.log('✅ Configuração inserida')
    }

    console.log('🎉 Seed concluído com sucesso!')
    console.log('\n📊 Dados inseridos:')
    console.log('- 5 equipes')
    console.log('- 3 clientes')
    console.log('- 3 colaboradores')
    console.log('- 1 conta Google')
    console.log('- 10 plataformas')
    console.log('- 1 configuração do sistema')
    console.log('\n🔑 Use as credenciais:')
    console.log('- Admin: admin@unipass.com / admin123')
    console.log('- Lucas: lucas@agencia.com / admin123')
    console.log('- User: user@unipass.com / admin123')

  } catch (error) {
    console.error('❌ Erro durante o seed:', error)
    process.exit(1)
  }
}

seedData()
