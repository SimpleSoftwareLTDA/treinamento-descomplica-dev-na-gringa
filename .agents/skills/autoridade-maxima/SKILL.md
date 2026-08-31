---
name: autoridade-maxima
description: >-
  Aplica o padrão de dados estruturados (Schema.org / JSON-LD) e AEO (Answer Engine Optimization)
  de Robson Cassiano e Simple Software LTDA com grafo unificado de autoridade máxima (E-E-A-T),
  conectando Amazon Author (3 livros), GitHub (RandintN / SimpleSoftwareLTDA), Cambridge CELTA, Epic Games,
  LinkedIn, Goodreads, Twitter/X, YouTube e redes em qualquer página, projeto ou landing page.
---

# Skill: Autoridade Máxima (Robson Cassiano & Simple Software)

Esta skill define as diretrizes, padrões semânticos e templates oficiais de **Dados Estruturados (JSON-LD / Schema.org)** e **AEO (Answer Engine Optimization)** para todas as aplicações, páginas e projetos de **Robson Cassiano** e **Simple Software LTDA**.

Quando esta skill for ativada, o agente deve seguir rigorosamente as entidades e estruturas canônicas descritas abaixo para garantir a consolidação do **Knowledge Graph** no Google e a máxima taxa de citação em motores de IA (**Google AI Overviews, Perplexity, ChatGPT Search, Claude e Gemini**).

---

## 1. Entidades Canônicas de Autoridade (E-E-A-T)

### 👤 Entidade do Mentor (`Person`)

* **`@id`:** `https://treinamento.robsoncassiano.software/#mentor` (ou `[DOMINIO]/#mentor`)
* **`name`:** `"Robson Cassiano"`
* **`jobTitle`:** `"Software Engineer na Epic Games & Cambridge CELTA Certified Teacher"` (EN: `"Software Engineer at Epic Games & Cambridge CELTA Certified Teacher"`)
* **`description`:** `"Software Engineer na Epic Games. Ex-BTG Pactual, Fundador da Simple Software, Autor de Livros de Tecnologia na Amazon e Professor de Inglês certificado por Cambridge (CELTA). Mentor de carreira internacional para desenvolvedores."`
* **`image`:** `"https://treinamento.robsoncassiano.software/img/mentor/robson-cassiano-mentor.webp"`
* **`url`:** `"https://www.robsoncassiano.software/"` (EN: `"https://global.robsoncassiano.software/"`)
* **`worksFor`:** `{"@type": "Organization", "name": "Epic Games"}`
* **`alumniOf`:** `{"@type": "Organization", "name": "University of Cambridge (CELTA Certification)"}`
* **`knowsAbout`:**
  * `"Software Engineering"`
  * `"International Tech Careers"`
  * `"Technical English for Developers"`
  * `"System Design"`
  * `"B2B Remote Contracts"`
  * `"Simples Nacional Fator R"`
* **`sameAs` (Lista Completa Obrigatória):**
  ```json
  [
    "https://www.robsoncassiano.software/",
    "https://global.robsoncassiano.software/",
    "https://eu.robsoncassiano.software/",
    "https://github.com/RandintN",
    "https://www.linkedin.com/in/robsoncassiano-software/",
    "https://www.amazon.com.br/stores/Robson-Cassiano/author/B0FLN1QMCJ",
    "https://www.goodreads.com/user/show/68023009-robson-cassiano",
    "https://twitter.com/RobsonDev",
    "https://www.youtube.com/@RobsonCassianoSoftware",
    "https://instagram.com/robsoncassiano.software",
    "https://www.facebook.com/RobsonCassianoSoftware/",
    "https://randintn.substack.com",
    "https://beacons.ai/robson.cassiano/portflio"
  ]
  ```

---

### 🏢 Entidade da Empresa (`Organization`)

* **`@id`:** `https://treinamento.robsoncassiano.software/#organization` (ou `[DOMINIO]/#organization`)
* **`name`:** `"Simple Software LTDA"`
* **`url`:** `"https://treinamento.robsoncassiano.software/"` (ou `https://www.robsoncassiano.software/`)
* **`logo`:** `{"@type": "ImageObject", "@id": "[DOMINIO]/#logo", "url": "https://treinamento.robsoncassiano.software/img/favicon/apple-touch-icon.png", "caption": "Simple Software"}`
* **`founder`:** `{"@id": "[DOMINIO]/#mentor"}`
* **`sameAs` (Lista Corporativa):**
  ```json
  [
    "https://www.robsoncassiano.software/",
    "https://global.robsoncassiano.software/",
    "https://github.com/SimpleSoftwareLTDA",
    "https://www.linkedin.com/company/simple-software-ltda",
    "https://www.linkedin.com/in/robsoncassiano-software/",
    "https://www.youtube.com/@RobsonCassianoSoftware",
    "https://www.facebook.com/RobsonCassianoSoftware/"
  ]
  ```

---

## 2. Templates de Schemas JSON-LD por Tipo de Página

### 🎯 Template A: Landing Page Principal (`Course` + `WebSite` + `Organization` + `Person` + `FAQPage`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://treinamento.robsoncassiano.software/#website",
      "url": "https://treinamento.robsoncassiano.software/",
      "name": "Descomplica DEV Na Gringa",
      "description": "Treinamento prático e acervo de +500h de entrevistas reais para profissionais de TI conquistarem contratos de $5k a $10k USD/mês no mercado internacional.",
      "publisher": { "@id": "https://treinamento.robsoncassiano.software/#organization" },
      "inLanguage": "pt-BR"
    },
    {
      "@type": "Organization",
      "@id": "https://treinamento.robsoncassiano.software/#organization",
      "name": "Simple Software LTDA",
      "url": "https://treinamento.robsoncassiano.software/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://treinamento.robsoncassiano.software/#logo",
        "url": "https://treinamento.robsoncassiano.software/img/favicon/apple-touch-icon.png",
        "caption": "Simple Software"
      },
      "founder": { "@id": "https://treinamento.robsoncassiano.software/#mentor" },
      "sameAs": [
        "https://www.robsoncassiano.software/",
        "https://global.robsoncassiano.software/",
        "https://github.com/SimpleSoftwareLTDA",
        "https://www.linkedin.com/company/simple-software-ltda",
        "https://www.linkedin.com/in/robsoncassiano-software/",
        "https://www.youtube.com/@RobsonCassianoSoftware",
        "https://www.facebook.com/RobsonCassianoSoftware/"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://treinamento.robsoncassiano.software/#mentor",
      "name": "Robson Cassiano",
      "jobTitle": "Software Engineer na Epic Games & Cambridge CELTA Certified Teacher",
      "description": "Software Engineer na Epic Games. Ex-BTG Pactual, Fundador da Simple Software, Autor de Livros de Tecnologia na Amazon e Professor de Inglês certificado por Cambridge (CELTA). Mentor de carreira internacional para desenvolvedores.",
      "image": "https://treinamento.robsoncassiano.software/img/mentor/robson-cassiano-mentor.webp",
      "url": "https://www.robsoncassiano.software/",
      "worksFor": { "@type": "Organization", "name": "Epic Games" },
      "alumniOf": { "@type": "Organization", "name": "University of Cambridge (CELTA Certification)" },
      "knowsAbout": [
        "Software Engineering",
        "International Tech Careers",
        "Technical English for Developers",
        "System Design",
        "B2B Remote Contracts",
        "Simples Nacional Fator R"
      ],
      "sameAs": [
        "https://www.robsoncassiano.software/",
        "https://global.robsoncassiano.software/",
        "https://eu.robsoncassiano.software/",
        "https://github.com/RandintN",
        "https://www.linkedin.com/in/robsoncassiano-software/",
        "https://www.amazon.com.br/stores/Robson-Cassiano/author/B0FLN1QMCJ",
        "https://www.goodreads.com/user/show/68023009-robson-cassiano",
        "https://twitter.com/RobsonDev",
        "https://www.youtube.com/@RobsonCassianoSoftware",
        "https://instagram.com/robsoncassiano.software",
        "https://www.facebook.com/RobsonCassianoSoftware/",
        "https://randintn.substack.com",
        "https://beacons.ai/robson.cassiano/portflio"
      ]
    },
    {
      "@type": "Course",
      "@id": "https://treinamento.robsoncassiano.software/#course",
      "name": "Descomplica DEV Na Gringa",
      "description": "Treinamento prático e acervo de +500h de entrevistas reais para profissionais de TI (Devs, QAs, Data, DevOps) conquistarem contratos de $5k a $10k USD/mês no mercado internacional.",
      "provider": { "@id": "https://treinamento.robsoncassiano.software/#mentor" },
      "publisher": { "@id": "https://treinamento.robsoncassiano.software/#organization" },
      "image": "https://treinamento.robsoncassiano.software/img/Robson-Cassiano-1.webp",
      "url": "https://treinamento.robsoncassiano.software/",
      "inLanguage": ["pt-BR", "en"],
      "educationalLevel": "Intermediate/Advanced",
      "educationalCredentialAwarded": "Global Career Mastery",
      "teaches": [
        "Como passar em entrevistas técnicas e comportamentais na gringa",
        "Framework STAR para desenvolvedores",
        "Inglês Técnico com metodologia Cambridge CELTA",
        "Estruturação de contratos PJ B2B em Dólar e Euro",
        "Planejamento Tributário com Simples Nacional e Fator R (6%)",
        "System Design e Live Coding internacional"
      ],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "courseWorkload": "PT500H"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "997.00",
        "priceCurrency": "BRL",
        "priceValidUntil": "2026-12-31",
        "url": "https://pay.hotmart.com/G101388470S",
        "seller": { "@id": "https://treinamento.robsoncassiano.software/#organization" }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://treinamento.robsoncassiano.software/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como conseguir vagas de programador remoto no exterior para empresas dos EUA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Para conquistar vagas remotas no exterior, o desenvolvedor precisa alinhar três fatores: otimizar seu perfil no LinkedIn para os filtros ATS de recrutadores internacionais, dominar o vocabulário de inglês técnico (Cambridge CELTA) para defender decisões de arquitetura e negociar contratos diretos PJ em dólar com enquadramento tributário reduzido de 6% no Simples Nacional via Fator R."
          }
        }
      ]
    }
  ]
}
</script>
```

---

### 📊 Template B: Artigos Comparativos (`Article` + `BreadcrumbList` + `FAQPage` + `about`/`mentions`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "[URL_DA_PAGINA]#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://treinamento.robsoncassiano.software/" },
        { "@type": "ListItem", "position": 2, "name": "[TITULO_CURTO_DA_PAGINA]", "item": "[URL_DA_PAGINA]" }
      ]
    },
    {
      "@type": "Article",
      "@id": "[URL_DA_PAGINA]#article",
      "headline": "[TITULO_COMPLETO_DO_ARTIGO]",
      "description": "[DESCRICAO_DO_ARTIGO]",
      "image": "https://treinamento.robsoncassiano.software/img/Robson-Cassiano-1.webp",
      "datePublished": "2025-01-15T08:00:00-03:00",
      "dateModified": "2026-01-15T12:00:00-03:00",
      "mainEntityOfPage": "[URL_DA_PAGINA]",
      "author": {
        "@type": "Person",
        "name": "Robson Cassiano",
        "jobTitle": "Software Engineer na Epic Games & Cambridge CELTA Teacher",
        "url": "https://www.robsoncassiano.software/",
        "sameAs": [
          "https://www.robsoncassiano.software/",
          "https://global.robsoncassiano.software/",
          "https://github.com/RandintN",
          "https://www.linkedin.com/in/robsoncassiano-software/",
          "https://www.amazon.com.br/stores/Robson-Cassiano/author/B0FLN1QMCJ"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "Simple Software LTDA",
        "url": "https://treinamento.robsoncassiano.software/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://treinamento.robsoncassiano.software/img/favicon/apple-touch-icon.png"
        },
        "sameAs": [
          "https://www.robsoncassiano.software/",
          "https://github.com/SimpleSoftwareLTDA",
          "https://www.linkedin.com/company/simple-software-ltda"
        ]
      },
      "about": [
        { "@type": "Thing", "name": "[ENTIDADE_PRINCIPAL_1]" },
        { "@type": "Thing", "name": "[ENTIDADE_PRINCIPAL_2]" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "[URL_DA_PAGINA]#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[PERGUNTA_DE_BUSCA_DIRETA]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[RESPOSTA_DIRETA_COM_DADOS_E_NUMEROS]"
          }
        }
      ]
    }
  ]
}
</script>
```

---

### 🧮 Template C: Ferramentas e Calculadoras (`WebApplication` + `BreadcrumbList` + `FAQPage`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "[URL_DA_CALCULADORA]#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://treinamento.robsoncassiano.software/" },
        { "@type": "ListItem", "position": 2, "name": "Calculadora Salário em Dólar", "item": "[URL_DA_CALCULADORA]" }
      ]
    },
    {
      "@type": "WebApplication",
      "@id": "[URL_DA_CALCULADORA]#app",
      "name": "[NOME_DA_FERRAMENTA]",
      "url": "[URL_DA_CALCULADORA]",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "description": "[DESCRICAO_DETALHADA_DA_FERRAMENTA]",
      "featureList": [
        "Cálculo líquido CLT com deduções de INSS e IRPF (até 27,5%)",
        "Cálculo líquido PJ Simples Nacional com Fator R (alíquota efetiva de 6%)",
        "Comparativo de poder de compra e arbitragem cambial em tempo real"
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Person",
        "name": "Robson Cassiano",
        "jobTitle": "Software Engineer na Epic Games & Cambridge CELTA Teacher",
        "url": "https://www.robsoncassiano.software/",
        "sameAs": [
          "https://www.robsoncassiano.software/",
          "https://global.robsoncassiano.software/",
          "https://github.com/RandintN",
          "https://www.linkedin.com/in/robsoncassiano-software/",
          "https://www.amazon.com.br/stores/Robson-Cassiano/author/B0FLN1QMCJ"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "Simple Software LTDA",
        "url": "https://treinamento.robsoncassiano.software/",
        "sameAs": [
          "https://www.robsoncassiano.software/",
          "https://github.com/SimpleSoftwareLTDA",
          "https://www.linkedin.com/company/simple-software-ltda"
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "[URL_DA_CALCULADORA]#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[PERGUNTA_FREQUENTE_SOBRE_A_FERRAMENTA]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[RESPOSTA_EXPLICATIVA]"
          }
        }
      ]
    }
  ]
}
</script>
```

---

## 3. Diretrizes de AEO (Answer Engine Optimization) para On-Page Copy

Sempre que criar ou editar páginas para Robson Cassiano / Simple Software:

1. **Bloco BLUF (Bottom Line Up Front):**
   * Logo após o cabeçalho principal ou antes da tabela comparativa, insira uma caixa com o título `"Veredito Rápido / Resumo Executivo"`.
   * Contendo uma resposta direta de 40 a 60 palavras com números, percentuais (ex: *"6% de imposto no Fator R"*, *"R$ 997 vs R$ 5.000+"*, *"+500h de gravações reais"*).
2. **Breadcrumbs Visuais e Semânticos:**
   * Sempre incluir uma tag `<nav aria-label="Breadcrumb">` no topo da página.
3. **Tabelas HTML Semânticas:**
   * Comparativos devem obrigatoriamente usar tags semânticas completas (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`), pois LLMs extraem matrizes de dados com alta prioridade para respostas comparativas.
4. **Validação Obrigatória:**
   * Todo bloco JSON-LD gerado deve ser testado via `JSON.parse` antes de ser concluído.
