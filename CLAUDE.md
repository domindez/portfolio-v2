# Reglas del proyecto

## Demos comerciales: proyecto aparte en `demos/`

Las demos ya no forman parte del portfolio. Viven en `demos/`, un proyecto Astro independiente que se despliega en https://demos.domindez.com/<slug> (Cloudflare Pages `domindez-demos`, directorio raíz `demos/`). Sus reglas están en `demos/CLAUDE.md`.

- No añadas demos ni código de demos al portfolio (`src/`).
- `public/_redirects` mantiene un 301 de `/demo/*` y `/demo-og/*` hacia el subdominio: no lo quites, hay enlaces a demos ya enviados con la URL antigua.
- `demos/` tiene su propio `package.json` y `node_modules`: instala y construye desde esa carpeta (`cd demos && npm install && npm run build`).
