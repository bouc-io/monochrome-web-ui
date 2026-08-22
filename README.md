# monochrome-web-ui

React/Vite marketing website for the **bouc.io AI platform** — the public-facing
landing site (Home, About, Q&A, Contact) that replaces the old static website.
The **Login** button redirects visitors to `https://chat.<current-domain>`, where
the authenticated chat application lives.

Part of the [bouc.io AI platform](../../../documentation/getting-started/README.md#ai-assistant-platform).

## Notes

In order to leverage CI/CD from GitLab, this GitHub repo is mirrored within GitLab
(`bouc-io/application/web/web-mirror-ui`).

## Features

- Landing page presenting the five platform layers: Chatbot, Agent, Memory, Portal, Admin
- About, Q&A (accordion), and Contact pages, plus a 404 page
- Login button that sends users to the chat app on the current domain (`chat.<domain>`)
- Fully static — no backend, no auth, no runtime environment variables
- Built with React, TypeScript, Vite, shadcn-ui, and Tailwind CSS
- Editable in [Lovable](https://lovable.dev/) (see `.lovable/plan.md`)

## Prerequisites

- Node.js 20+ and npm

## Setup & Run

```sh
npm install
npm run dev               # dev server at http://localhost:8080
```

## Build & Test

```sh
npm run build             # production build -> dist/
npm run build:dev         # dev-mode build
npm run preview           # preview the production build
npm run lint              # ESLint
npm run test              # Vitest (page smoke tests)
```

## Docker

The Dockerfile builds the site and serves the static `dist/` with
[`serve`](https://www.npmjs.com/package/serve) on port 3000:

```sh
docker build -t monochrome-web-ui .
docker run -p 3000:3000 monochrome-web-ui
```

## Project structure

- `src/pages/` — Landing, About, Faq, Contact, NotFound
- `src/components/site/` — SiteLayout, Header, Footer, LoginButton
- `src/components/ui/` — the shadcn-ui primitives actually used (accordion, button, card, sonner, tooltip)
- `src/lib/` — utilities (`cn`)
- `test/` — Vitest setup and page smoke tests

## Deployment

CI (`.gitlab-ci.yml`) builds a multi-arch image and pushes it to the GitLab
registry. A Helm chart + FluxCD wiring for the `www.<domain>` slot (currently
served by the legacy `static-web` HelmRelease) is a follow-up — see the other
`*-ui` charts under `fluxcd/fluxcdboucio/clusters/components/` for the pattern.

## License

[Elastic License 2.0](./LICENSE) — source-available; not OSI open source.
