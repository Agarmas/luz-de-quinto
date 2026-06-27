# Luz de Quinto

Sitio web oficial del grupo juvenil católico "Luz de Quinto" en Montequinto, creado con Astro.

## 🌟 Descripción

Esta web presenta:
- Página de inicio con información del grupo y acceso directo a secciones clave.
- Página de formación para los encuentros y actividades.
- Página de sacramentos con detalles sobre acompañamiento espiritual.
- Página de contacto para comunicarse con el equipo.

El proyecto está preparado para desplegar en GitHub Pages bajo la ruta:
`https://agarmas.github.io/luz-de-quinto/`.

## 📁 Estructura principal

- `src/pages/` - páginas públicas de la web: `index.astro`, `formacion.astro`, `sacramentos.astro`, `contacto.astro`.
- `src/layouts/Layout.astro` - plantilla base común para todas las páginas.
- `src/components/` - componentes reutilizables como `Header.astro` y `Footer.astro`.
- `src/styles/global.css` - estilos globales y reglas responsive.
- `astro.config.mjs` - configuración de Astro, incluida la base del sitio para GitHub Pages.

## 🚀 Tecnología

- Astro `^7.0.3`
- HTML/CSS
- JavaScript mínimo para navegación y rutas

## 🧰 Scripts disponibles

Desde la raíz del proyecto:

```sh
npm install
npm run dev
npm run build
npm run preview
```

- `npm install` - instala dependencias.
- `npm run dev` - levanta un servidor local de desarrollo.
- `npm run build` - genera la versión estática en `dist/`.
- `npm run preview` - vista previa de la versión de producción local.

## 📱 Responsive

El sitio incluye reglas CSS para adaptarse a pantallas pequeñas:
- Encabezado y navegación ajustados en dispositivos móviles.
- Contenido de la página principal y secciones en una sola columna en anchos pequeños.
- Botones y acciones amplios para mejor usabilidad táctil.

## 🌍 Despliegue en GitHub Pages

La configuración de `astro.config.mjs` incluye:
- `site: 'https://agarmas.github.io/luz-de-quinto/'`
- `base: '/luz-de-quinto/'`

Esto permite desplegar el sitio correctamente en GitHub Pages sin errores 404 en rutas internas.

## 📌 Notas

- Asegúrate de usar Node.js `>=22.12.0`.
- El contenido del sitio está en español.
- Para agregar nuevas páginas, crea archivos `.astro` en `src/pages` y actualiza la navegación en `Header.astro`.
