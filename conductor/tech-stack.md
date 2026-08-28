# Tech Stack: Descomplica DEV Na Gringa

## Frontend
- **HTML5:** Semantic HTML structure for SEO and accessibility.
- **Tailwind CSS 4.1.x:** Utility-first CSS framework for styling, configured with custom brand colors (`brand-dark`, `brand-blue`, `brand-cyan`, `brand-indigo`) and the 'Outfit' font family.
- **JavaScript (Vanilla):** Minimal JavaScript for interactive elements (e.g., mobile menu).

## Development & Tooling
- **Bun:** Primary JavaScript/TypeScript runtime, package manager, and task runner.
    - `bun run build`: Compiles Tailwind CSS (`css/input.css` -> `css/output.css`).
    - `bun run start` / `bun run dev`: Local static server for development.

## Infrastructure & Edge
- **Cloudflare Pages:** Global static asset hosting and CDN caching.
- **Cloudflare Workers:** Edge routing and content negotiation (e.g., serving Markdown `/index.md` and `/llms.txt` for AI/LLM crawlers).

## Project Structure
- `index.html`: Main landing page entry point.
- `comparativo-*.html`: Satellite pages for bottom-of-funnel SEO keywords.
- `css/input.css` & `css/output.css`: Tailwind source and generated styles.
- `js/main.js`: Client-side logic (i18n, Arbitrage Calculator, analytics, `<lite-youtube>`).
- `img/`: Optimized assets (WebP format prioritized).
- `llms.txt` & `index.md`: LLM discovery and structured training overview.

