/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Domínios específicos para favicons principais
      {
        protocol: 'https',
        hostname: 'business.facebook.com',
      },
      {
        protocol: 'https',
        hostname: 'app.rdstation.com.br',
      },
      {
        protocol: 'https',
        hostname: 'accounts.google.com',
      },
      {
        protocol: 'https',
        hostname: 'www.figma.com',
      },
      {
        protocol: 'https',
        hostname: 'trello.com',
      },
      {
        protocol: 'https',
        hostname: 'analytics.google.com',
      },
      // Domínios comuns de ferramentas
      {
        protocol: 'https',
        hostname: '*.google.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: '*.microsoft.com',
      },
      {
        protocol: 'https',
        hostname: '*.office.com',
      },
      {
        protocol: 'https',
        hostname: '*.adobe.com',
      },
      {
        protocol: 'https',
        hostname: '*.canva.com',
      },
      {
        protocol: 'https',
        hostname: '*.notion.so',
      },
      {
        protocol: 'https',
        hostname: '*.slack.com',
      },
      {
        protocol: 'https',
        hostname: '*.zoom.us',
      },
      {
        protocol: 'https',
        hostname: '*.atlassian.net',
      },
      {
        protocol: 'https',
        hostname: '*.salesforce.com',
      },
      {
        protocol: 'https',
        hostname: '*.hubspot.com',
      },
      {
        protocol: 'https',
        hostname: '*.mailchimp.com',
      },
      {
        protocol: 'https',
        hostname: '*.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: '*.shopify.com',
      },
      // Suporte amplo para favicons (qualquer domínio)
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/favicon.ico',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/favicon.png',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/apple-touch-icon.png',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/apple-touch-icon-*.png',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/android-chrome-*.png',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/mstile-*.png',
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig 