// Esquema JSON-LD para o site SolarEnergy

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://solarenergy.com.br/#website",
  "url": "https://solarenergy.com.br",
  "name": "SolarEnergy",
  "description": "Energia solar por assinatura com economia de até 20% na sua conta de luz",
  "publisher": {
    "@id": "https://solarenergy.com.br/#organization"
  },
  "inLanguage": "pt-BR"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://solarenergy.com.br/#organization",
  "name": "SolarEnergy",
  "url": "https://solarenergy.com.br",
  "logo": {
    "@type": "ImageObject",
    "url": "https://solarenergy.com.br/logo.png",
    "width": 180,
    "height": 60
  },
  "sameAs": [
    "https://facebook.com/solarenergybr",
    "https://instagram.com/solarenergybr",
    "https://linkedin.com/company/solarenergybr",
    "https://twitter.com/solarenergybr"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+55-11-99999-9999",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 1000",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-100",
    "addressCountry": "BR"
  },
  "description": "A SolarEnergy é uma empresa especializada em energia solar por assinatura, oferecendo economia de até 20% na conta de energia sem necessidade de instalação de painéis solares.",
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "Nome do Fundador"
    }
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "50+"
  },
  "slogan": "Energia limpa, economia real",
  "knowsAbout": [
    "Energia Solar",
    "Energia Renovável",
    "Sustentabilidade",
    "Economia de Energia"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Energia Solar por Assinatura",
  "provider": {
    "@id": "https://solarenergy.com.br/#organization"
  },
  "description": "Economize até 20% na sua conta de energia através da nossa solução de energia solar por assinatura, sem instalação de painéis na sua casa.",
  "areaServed": "Brasil",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "description": "Sem custo de adesão, economize desde o primeiro mês"
  },
  "serviceType": "Energia Solar",
  "termsOfService": "https://solarenergy.com.br/termos-de-servico",
  "brand": {
    "@type": "Brand",
    "name": "SolarEnergy"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona a energia solar por assinatura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nossa solução permite que você utilize energia solar sem instalar painéis em sua casa. A energia é gerada em nossas fazendas solares e distribuída pela rede elétrica existente, gerando créditos que reduzem sua conta de luz em até 20%."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso fazer alguma instalação na minha casa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não, você não precisa instalar nada. Continuará recebendo energia da mesma distribuidora, mas com desconto na conta."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto posso economizar com a SolarEnergy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nossos clientes economizam em média 20% na conta de energia elétrica mensalmente."
      }
    },
    {
      "@type": "Question",
      "name": "Existe alguma taxa de adesão ou cancelamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não há taxas de adesão ou cancelamento. Você pode cancelar o serviço a qualquer momento sem multas."
      }
    },
    {
      "@type": "Question",
      "name": "A energia é realmente limpa e renovável?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, 100% da energia gerada vem de fontes solares, contribuindo para a redução da emissão de CO2 e para um planeta mais sustentável."
      }
    }
  ]
}; 