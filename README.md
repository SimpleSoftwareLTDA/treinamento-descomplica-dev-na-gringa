# Descomplica DEV Na Gringa — Landing Page

Adquira clareza e previsibilidade com os processos internacionais que pagam em dólar 👉 https://robsoncassiano.software/descomplica-dev-na-gringa-hotmart

P.S. Método baseado em dados, evidências e provas. Tudo real, auditável e replicável.

_______
Este repositório contém uma landing page estática para a mentoria "Descomplica DEV Na Gringa".

- Site/Oferta: https://robsoncassiano.software/descomplica-dev-na-gringa-hotmart

## Visão Geral
A página apresenta a proposta da mentoria, benefícios, FAQ, termos e links para inscrição. O layout utiliza Tailwind CSS compilado localmente via Bun e estilos complementares em `css/style.css`. Há scripts para controle de interatividade (menu mobile, calculadora de arbitragem, i18n, etc.) em `js/main.js`. O deploy e roteamento de borda são executados via Cloudflare Pages & Cloudflare Workers.

## Como executar localmente
1. Clone este repositório.
2. Instale as dependências com [Bun](https://bun.sh):
   ```bash
   bun install
   ```
3. Compile os estilos CSS:
   ```bash
   bun run build
   ```
4. Inicie o servidor local:
   ```bash
   bun run start # ou sirva com seu servidor HTTP estático preferido
   ```

## Infraestrutura & Deploy
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Edge Routing & Content Negotiation:** [Cloudflare Workers](https://workers.cloudflare.com/) para servir conteúdo Markdown (`/index.md` e `/llms.txt`) e otimizações de cache global.

## Estrutura do Projeto
- `index.html`: página principal da landing page
- `comparativo-*.html`: páginas satélite e comparativos de fundo de funil
- `css/input.css` & `css/output.css`: código-fonte e bundle compilado do Tailwind CSS
- `css/style.css`: estilos complementares e animações
- `js/main.js`: lógica de i18n, calculadora de arbitragem, telemetria e UI
- `img/`: imagens, favicons e depoimentos otimizados em WebP
- `llms.txt` & `index.md`: arquivos de contexto e indexação para modelos de linguagem (GEO / LLMs)
- `robots.txt`, `sitemap.xml`, `site.webmanifest`: arquivos de SEO e indexação
- `LICENSE.txt`: licença do projeto

## Link Oficial
Acesse a página da mentoria e mais detalhes em:

https://treinamento.robsoncassiano.software

## Licença
Consulte o arquivo `LICENSE.txt` para detalhes da licença.

Vida Longa e Próspera 🖖🏻

