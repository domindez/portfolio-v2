# Demos comerciales (demos.domindez.com)

Proyecto Astro independiente del portfolio (la raíz del repo). Se despliega solo en el proyecto de Cloudflare Pages `domindez-demos` (directorio raíz `demos/`) cada vez que se hace push a `master` con cambios en `demos/`. El portfolio tiene un 301 de `domindez.com/demo/*` → `demos.domindez.com/*` para que los enlaces antiguos sigan funcionando.

## Estructura

- `src/demos/<slug>/`: código de la demo (Home, Carta, componentes, datos, scripts, CSS).
- `src/assets/demos/<slug>/`: fotos (pasan por `astro:assets`).
- `src/pages/<slug>/`: **una página por demo** que importa solo sus componentes. URLs: `/<slug>`, `/<slug>/carta` o `/<slug>/carta/<local>`.
- `src/layouts/DemoLayout.astro`: layout común (noindex, OG, pastilla "Demo preparada por Domindez Studio", `?clean`).
- `public/demo-og/<slug>.jpg`: imagen para compartir (1200×630), generada con `scripts/build-og-<slug>.mjs` (`node scripts/build-og-<slug>.mjs`).

## Añadir una demo

1. Crea `src/demos/<slug>/` y `src/assets/demos/<slug>/`.
2. Crea `src/pages/<slug>/index.astro` (y `carta.astro` o `carta/[sala].astro` con `getStaticPaths` sobre `venues`), copiando el patrón de las existentes.
3. Los enlaces internos usan la base `/<slug>` (nunca `/demo/<slug>`).
4. Las fuentes van como dependencia `@fontsource…` en este `package.json`.

## Estilos

Como cada demo tiene sus propias páginas, Astro solo carga su CSS en ellas: una demo ya no puede romper a otra. Aun así:

1. Cada demo tiene una clase raíz propia en el `<body>` (`sp`, `sh`, `ut`, `bgb`, `pp`…) y sus selectores van bajo ella (`.pp .nav`), clases añadidas por JS con prefijo (`pp-menu-open`) y `@keyframes` con nombre prefijado.
2. Nunca importes componentes, CSS o scripts de otra demo: si algo se comparte, va a `src/layouts` o a un componente común, no se cruza entre demos.
3. No redefinas las clases del layout común (`.demo-badge…`, `.demo-clean`).
