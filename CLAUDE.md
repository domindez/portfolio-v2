# Reglas del proyecto

## Demos (`src/demos/<slug>/`): aislamiento de estilos

Todas las demos se importan juntas desde `src/demos/index.ts`, así que el CSS de una demo puede acabar cargándose en las páginas de otra. Un selector genérico sin scope (`.nav`, `.menu`, `.wrap`, `.btn`, `.hero`, `.foot`…) rompe las demás demos (ya pasó: `unter.css` rompió la barra y el menú de Sala Premier).

Al crear o editar una demo:

1. **Cada demo tiene una clase raíz propia** en el `<body>` (p. ej. `sp`, `sh`, `ut`) y **todos** sus selectores van bajo ella: `.ut .nav { … }`, nunca `.nav { … }`.
2. Esto incluye el CSS dentro de `<style>` en los `.astro` (usar `<style is:global>` solo con selectores ya prefijados) y las media queries: `@media (...) { .ut .nav { … } }`.
3. Excepciones permitidas: `@font-face`, `@keyframes` (con nombre prefijado, p. ej. `ut-spin`), variables en `.ut { … }`, y selectores de `html` con clases únicas de la demo (`html.ut-menu-open`).
4. Las clases que se añaden a `html`/`body` por JS llevan prefijo de la demo (`ut-ready`, `sp-menu-open`), no nombres genéricos (`menu-open`, `lenis`).
5. Las clases CSS de componentes compartidos del sitio (`src/components`, `src/layouts`) no se reutilizan en las demos ni se redefinen en ellas.
6. Antes de dar por buena una demo nueva: abrir las demás demos existentes a ancho móvil y comprobar que barra y menú siguen igual.
