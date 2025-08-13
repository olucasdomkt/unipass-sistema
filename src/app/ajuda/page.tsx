"use client"

import { useState } from 'react'
import { Search, HelpCircle, Book, MessageCircle, Shield, Key, Globe, Users, Settings } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/lib/auth-context'

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Primeiros Passos',
    icon: Book,
    color: 'bg-blue-100 text-blue-600',
    articles: [
      {
        title: 'Como fazer login no sistema',
        content: 'Use suas credenciais fornecidas pelo administrador. O sistema possui autenticação segura com timeout automático.',
        tags: ['login', 'acesso']
      },
      {
        title: 'Navegação básica',
        content: 'Use a barra lateral para navegar entre as seções. Administradores têm acesso a funcionalidades adicionais.',
        tags: ['navegação', 'interface']
      },
      {
        title: 'Atualizando seu perfil',
        content: 'Suas informações são gerenciadas pelo administrador. Entre em contato para solicitar alterações.',
        tags: ['perfil', 'dados']
      }
    ]
  },
  {
    id: 'platforms',
    title: 'Plataformas',
    icon: Globe,
    color: 'bg-green-100 text-green-600',
    articles: [
      {
        title: 'Acessando plataformas',
        content: 'Clique em "Acessar" para abrir a plataforma em nova aba. Use "Ver senha" para visualizar credenciais.',
        tags: ['plataformas', 'acesso']
      },
      {
        title: 'Visualizando senhas',
        content: 'Insira a chave mestre para revelar senhas. Todas as visualizações são registradas por segurança.',
        tags: ['senhas', 'segurança']
      },
      {
        title: 'Reportando problemas',
        content: 'Use o botão "Problema" para reportar dificuldades de acesso. O administrador será notificado.',
        tags: ['problemas', 'suporte']
      },
      {
        title: 'Cadastrando nova plataforma (Admin)',
        content: 'Administradores podem adicionar novas plataformas pelo botão "Nova plataforma".',
        tags: ['admin', 'cadastro']
      }
    ]
  },
  {
    id: 'passwords',
    title: 'Senhas',
    icon: Key,
    color: 'bg-yellow-100 text-yellow-600',
    articles: [
      {
        title: 'Política de senhas',
        content: 'Senhas são trocadas regularmente conforme política definida. Você será notificado sobre expirações.',
        tags: ['política', 'segurança']
      },
      {
        title: 'Status das senhas',
        content: 'Verde = válida, Amarelo = expirando, Vermelho = expirada. Verifique regularmente o status.',
        tags: ['status', 'monitoramento']
      },
      {
        title: 'Chave mestre',
        content: 'A chave mestre é necessária para visualizar senhas. Mantenha-a segura e não compartilhe.',
        tags: ['chave-mestre', 'segurança']
      }
    ]
  },
  {
    id: 'security',
    title: 'Segurança',
    icon: Shield,
    color: 'bg-red-100 text-red-600',
    articles: [
      {
        title: 'Sessões seguras',
        content: 'Sua sessão expira automaticamente após inatividade. Sempre faça logout ao sair.',
        tags: ['sessão', 'logout']
      },
      {
        title: 'Logs de atividade',
        content: 'Todas as ações são registradas com timestamp, IP e detalhes para auditoria.',
        tags: ['logs', 'auditoria']
      },
      {
        title: 'Boas práticas',
        content: 'Não compartilhe credenciais, use sempre o sistema oficial, mantenha seu navegador atualizado.',
        tags: ['boas-práticas', 'segurança']
      }
    ]
  }
]

const faqs = [
  {
    question: 'Esqueci minha senha do sistema',
    answer: 'Entre em contato com o administrador para redefinir sua senha. Não há auto-recuperação por questões de segurança.'
  },
  {
    question: 'Não consigo ver uma plataforma específica',
    answer: 'Verifique se você tem permissão de acesso. Algumas plataformas são restritas a determinados usuários ou equipes.'
  },
  {
    question: 'A chave mestre não está funcionando',
    answer: 'Verifique se digitou corretamente. Se o problema persistir, a chave pode ter sido alterada pelo administrador.'
  },
  {
    question: 'Como solicitar acesso a uma nova plataforma?',
    answer: 'Entre em contato com o administrador descrevendo qual plataforma precisa e o motivo do acesso.'
  },
  {
    question: 'Posso usar o sistema em dispositivos móveis?',
    answer: 'Sim, o sistema é responsivo e funciona em smartphones e tablets através do navegador.'
  }
]

export default function AjudaPage() {
  const { user, isAdminByEmail, updateLastActivity } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const filteredArticles = helpCategories.flatMap(category => 
    category.articles
      .filter(article => 
        (!selectedCategory || category.id === selectedCategory) &&
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      )
      .map(article => ({ ...article, category: category.title, categoryIcon: category.icon, categoryColor: category.color }))
  )

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Central de Ajuda</h1>
        <p className="text-gray-600">
          Encontre respostas e aprenda a usar o Unipass
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Buscar ajuda..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {!searchTerm && (
        <>
          {/* Categories Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {helpCategories.map((category) => (
              <Card 
                key={category.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedCategory(selectedCategory === category.id ? '' : category.id)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{category.title}</h3>
                      <p className="text-sm text-gray-600">{category.articles.length} artigos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <HelpCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Artigos Disponíveis</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {helpCategories.reduce((total, cat) => total + cat.articles.length, 0)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">FAQs</p>
                    <p className="text-2xl font-bold text-gray-900">{faqs.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Seu Nível</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {isAdminByEmail() ? 'Admin' : 'Usuário'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {/* Articles */}
      {(searchTerm || selectedCategory) && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {searchTerm ? `Resultados para "${searchTerm}"` : 'Artigos'}
          </h2>
          <div className="space-y-4">
            {filteredArticles.map((article, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${article.categoryColor}`}>
                      <article.categoryIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium text-gray-900">{article.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{article.content}</p>
                      <div className="flex flex-wrap gap-1">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      {(searchTerm || !selectedCategory) && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-sm transition-shadow">
                <CardContent 
                  className="pt-6"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                    <HelpCircle className={`h-4 w-4 text-gray-400 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} />
                  </div>
                  {expandedFaq === index && (
                    <p className="mt-3 text-gray-600">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Precisa de mais ajuda?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Não encontrou o que procurava? Entre em contato com nossa equipe de suporte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-1">Email de Suporte</h4>
              <p className="text-gray-600">admin@unipass.com</p>
            </div>
            <div className="flex-1 p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-1">Horário de Atendimento</h4>
              <p className="text-gray-600">Segunda a Sexta, 9h às 18h</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}