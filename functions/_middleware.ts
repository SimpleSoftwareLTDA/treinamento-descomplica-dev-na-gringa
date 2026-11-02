// Content negotiation: markdown twin for clients that ask for text/markdown.
// Pages ignores netlify.toml, so the equivalent of the old Netlify edge function
// lives here, in a Pages Function middleware.

type Fetcher = { fetch: (input: URL | Request | string) => Promise<Response> };

type PagesContext<Env = { ASSETS: Fetcher }> = {
  request: Request;
  env: Env;
  next: () => Promise<Response>;
};

const MARKDOWN: Record<string, string> = {
  "/": "/index.md",
  "/index.html": "/index.md",
  "/en": "/index-en.md",
  "/en/": "/index-en.md",
};

export const onRequest = async (context: PagesContext): Promise<Response> => {
  const accept = (context.request.headers.get("accept") ?? "").toLowerCase();
  const target = MARKDOWN[new URL(context.request.url).pathname];

  if (accept.includes("text/markdown") && target) {
    const asset = await context.env.ASSETS.fetch(new URL(target, context.request.url));
    if (asset.ok) {
      const text = await asset.text();
      return new Response(text, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "x-markdown-tokens": String(Math.ceil(text.length / 4)),
          "Vary": "Accept",
          "Cache-Control": "public, max-age=3600, must-revalidate",
        },
      });
    }
  }

  const response = await context.next();
  const headers = new Headers(response.headers);
  headers.set("Vary", "Accept");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};
