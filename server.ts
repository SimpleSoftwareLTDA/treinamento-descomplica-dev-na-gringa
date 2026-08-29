import fs from 'node:fs';
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

    // Se o caminho for um diretório, busca index.html dentro dele
    try {
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
    } catch {}

    let file = Bun.file(filePath);

    // Se não encontrou diretamente, tenta com extensão .html
    if (!file.size) {
      const cleanPath = pathname.replace(/\/$/, '');
      const htmlPath = path.join(BASE_DIR, `${cleanPath}.html`);
      const htmlFile = Bun.file(htmlPath);
      if (htmlFile.size) {
        file = htmlFile;
      }
    }

    if (file.size) {
      return new Response(file);
    }

    return new Response('Not Found', { status: 404 });
  }
});

console.log(`🚀 Dev na Gringa rodando nativamente com Bun em http://localhost:${server.port}`);
