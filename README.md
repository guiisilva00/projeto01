# 🚀 Tier 11 — Landing Page

Landing page institucional da Tier 11, agência parceira premium do Facebook e Google. Desenvolvida com Next.js e React, apresenta os serviços de publicidade digital no Facebook e Instagram, destacando parcerias, conquistas e métricas de desempenho da empresa.

---

## 📸 Visão Geral

Uma página moderna com design gradiente em tons de azul, contendo:

- **Header** com logo e navegação
- **Seção Hero** com título de impacto, subtítulo e CTA
- **Ilustração** de foguete representando crescimento
- **Footer** com logos de parceiros (Facebook, Google, Forbes, Inc. 5000) e métricas

---

## 🛠️ Tecnologias

| Tecnologia | Versão |
|------------|--------|
| [Next.js](https://nextjs.org) | 16.3.0 |
| [React](https://react.dev) | 19.2.8 |
| CSS Vanilla | — |

---

## 📁 Estrutura do Projeto

```
projeto01/
├── public/
│   └── imagens/          # Logo, ilustrações e ícones dos parceiros
├── src/
│   └── app/
│       ├── layout.jsx    # Layout raiz (fontes, metadata)
│       ├── page.jsx      # Página principal (Home)
│       ├── page.module.css
│       └── globals.css   # Estilos globais (header, hero, footer)
├── package.json
└── next.config.mjs
```

---

## 🚀 Como Rodar

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm start` | Inicia o servidor em modo de produção |

---

## 🎨 Design

- **Paleta:** Gradiente azul (#1c5cbb → #0c2e61)
- **CTA:** Rosa/coral (rgb(206, 75, 97))
- **Tipografia:** Geist Sans (via `next/font`)
- **Layout:** Flexbox responsivo com max-width de 1200px

---

## 📄 Licença

Projeto desenvolvido para fins de estudo e portfólio.
