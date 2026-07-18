## Goal

Replace the chatbot app with a small React marketing site presenting the AI platform (Chatbot, Agent, Memory, Portal, Admin), with a Login button that redirects to `chat.<domain>`.

## Pages & routes (React Router)

- `/` — Landing: hero, 5 feature cards (Chatbot, Agent, Memory, Portal, Admin), CTA
- `/about` — About the platform
- `/faq` — Q&A
- `/contact` — Simple contact info (no backend form)
- `*` — 404 (keep existing NotFound)

## Layout

- Sticky header: logo (left), nav links (center), **Login** button (top-right)
- Footer: copyright + small links
- Monochrome aesthetic preserved (reuse `index.css` tokens)

## Login behavior

Button computes target from `window.location.hostname`:
- Strip leading `www.`
- If hostname is `localhost`, `127.0.0.1`, or ends with `.lovable.app` / `.lovable.dev` → fall back to a placeholder (e.g. `https://chat.example.com`) so the button still works in preview
- Otherwise → `https://chat.<domain>`
- Opens in same tab

## Files to remove

- `src/auth/` (Keycloak/Auth0/Okta/stub providers)
- `src/lib/ollamaApi.ts` and chat-related libs
- `src/components/` chat/message/model-selector pieces
- `src/context/` chat/auth contexts
- `src/hooks/` chat-specific hooks
- `src/pages/` chat page(s)
- `.env.template` entries for auth/Ollama/models
- `Dockerfile` chat-specific env wiring (keep simple static build) — optional
- Unused deps: `keycloak-js`, `jwt-decode`, `axios`, `@types/axios`, `https-browserify`, `react-markdown`, `remark-gfm`, `pino`, `input-otp`, `embla-carousel-react`, `react-day-picker`, `react-resizable-panels`, `recharts`, `vaul`, `cmdk`, `next-themes`, plus matching `@radix-ui/*` packages not used by retained shadcn components

## Files to add/keep

- `src/App.tsx` — Router with the 5 routes wrapped in a `<SiteLayout>`
- `src/components/site/Header.tsx`, `Footer.tsx`, `LoginButton.tsx`, `FeatureCard.tsx`
- `src/pages/Landing.tsx`, `About.tsx`, `Faq.tsx`, `Contact.tsx`, keep `NotFound.tsx`
- Keep shadcn primitives actually used: `button`, `card`, `accordion` (for FAQ), `navigation-menu` or simple nav, `sonner` (optional)
- Keep `tailwind.config.ts`, `index.css`, `main.tsx`, `vite.config.ts`

## Out of scope

- No real auth, no backend, no chat code
- No new design system — reuse existing monochrome tokens
- The actual `chat.<domain>` app is assumed to be hosted separately

## Technical notes

- Keep `react`, `react-dom`, `react-router-dom`, `tailwindcss`, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tailwindcss-animate`, `@radix-ui/react-slot` (+ radix pkgs for retained shadcn components), `sonner` (optional), `@tanstack/react-query` (optional — can drop)
- After cleanup, run build to confirm no dangling imports
- Fallback login host configurable via a single constant in `LoginButton.tsx` (no env var needed)
