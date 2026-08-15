import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const acceptHeader = request.headers.get("accept") || "";

  // Check if client explicitly requests Markdown
  if (acceptHeader.toLowerCase().includes("text/markdown")) {
    const url = new URL(request.url);

    // If root or index.html is requested, return index.md
    if (url.pathname === "/" || url.pathname === "/index.html" || url.pathname === "") {
      const markdownUrl = new URL("/index.md", request.url);
      const markdownRes = await fetch(markdownUrl.toString());
      if (markdownRes.ok) {
        const text = await markdownRes.text();
        const tokenEstimate = Math.ceil(text.length / 4);

        return new Response(text, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "x-markdown-tokens": tokenEstimate.toString(),
            "Vary": "Accept",
            "Cache-Control": "public, max-age=3600, must-revalidate",
          },
        });
      }
    }
  }

  const response = await context.next();
  response.headers.set("Vary", "Accept");
  return response;
};
