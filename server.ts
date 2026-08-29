import path from 'node:path';

const PORT = Number(process.env.PORT) || 3000;
const BASE_DIR = import.meta.dir;

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    let pathname = decodeURIComponent(url.pathname);

    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }

    let filePath = path.join(BASE_DIR, pathname);
    let file = Bun.file(filePath);

    // Se a rota não tiver extensão .html ou for pasta, busca o arquivo correspondente
    if (!file.size) {
      const htmlPath = path.join(BASE_DIR, `${pathname}.html`);
      const htmlFile = Bun.file(htmlPath);
      if (htmlFile.size) {
        file = htmlFile;
      } else {
        const dirIndexPath = path.join(filePath, 'index.html');
        const dirIndexFile = Bun.file(dirIndexPath);
        if (dirIndexFile.size) {
          file = dirIndexFile;
        }
      }
    }

    if (file.size) {
      return new Response(file);
    }

    return new Response('Not Found', { status: 404 });
  }
});

console.log(`🚀 Dev na Gringa rodando nativamente com Bun em http://localhost:${server.port}`);
