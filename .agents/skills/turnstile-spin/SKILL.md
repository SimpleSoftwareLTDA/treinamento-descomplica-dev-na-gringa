---
name: turnstile-spin
description: >-
  Integração e gerenciamento oficial do Cloudflare Turnstile e sanitização RFC de e-mails em formulários e APIs na borda (Pages Functions e Workers).
---

# Skill: Cloudflare Turnstile & Email Sanitization

Esta skill define o padrão de segurança e proteção anti-bot com Cloudflare Turnstile e higienização estrita de e-mails para o ecossistema Robson Cassiano & Simple Software LTDA.

## 1. Configurações Canônicas

* **Site Key:** `0x4AAAAAAEjUfJwT3yG_vHIF`
* **Action:** `subscribe`
* **Theme:** `dark`
* **Script Oficial:**
  ```html
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
  ```

## 2. Frontend Embed

```html
<div class="cf-turnstile" data-sitekey="0x4AAAAAAEjUfJwT3yG_vHIF" data-action="subscribe" data-theme="dark" style="margin-bottom: 0.75rem; display: flex; justify-content: center;"></div>
```

## 3. Backend Verification (Pages Function / Worker)

O endpoint `/api/subscribe` valida o token na API oficial:
`POST https://challenges.cloudflare.com/turnstile/v0/siteverify` com `{ secret: env.TURNSTILE_SECRET_KEY, response: turnstileToken, remoteip: clientIp }`.
