import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface SeoRouteConfig {
  title: string;
  description: string;
  canonical: string;
  type: string;
  staticFile: string;
  jsonLd: Record<string, unknown>[];
}

function replaceMeta(html: string, seo: SeoRouteConfig): string {
  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${seo.title}</title>`
  );

  // Replace <meta name="title">
  html = html.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="title" content="${seo.title}" />`
  );

  // Replace <meta name="description">
  html = html.replace(
    /<meta\s*\n?\s*name="description"\s*\n?\s*content="[^"]*"\s*\n?\s*\/?>/,
    `<meta name="description" content="${seo.description}" />`
  );

  // Replace <link rel="canonical">
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${seo.canonical}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${seo.type}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${seo.canonical}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${seo.title}" />`
  );
  html = html.replace(
    /<meta\s*\n?\s*property="og:description"\s*\n?\s*content="[^"]*"\s*\n?\s*\/?>/,
    `<meta property="og:description" content="${seo.description}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${seo.canonical}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${seo.title}" />`
  );
  html = html.replace(
    /<meta\s*\n?\s*name="twitter:description"\s*\n?\s*content="[^"]*"\s*\n?\s*\/?>/,
    `<meta name="twitter:description" content="${seo.description}" />`
  );

  return html;
}

function injectJsonLd(html: string, schemas: Record<string, unknown>[]): string {
  if (!schemas || schemas.length === 0) return html;

  const scripts = schemas
    .map(schema => `    <script type="application/ld+json">\n    ${JSON.stringify(schema, null, 2).split('\n').join('\n    ')}\n    </script>`)
    .join('\n');

  html = html.replace('</head>', `${scripts}\n  </head>`);

  return html;
}

export function staticSeoPlugin(): Plugin {
  return {
    name: 'static-seo-plugin',
    apply: 'build',
    closeBundle() {
      const seoDir = resolve(__dirname, '../seo');
      const distDir = resolve(__dirname, '../../dist');

      let template: string;
      try {
        template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');
      } catch {
        console.warn('[static-seo] dist/index.html not found, skipping.');
        return;
      }

      let config: Record<string, SeoRouteConfig>;
      try {
        config = JSON.parse(readFileSync(resolve(seoDir, 'seo.json'), 'utf-8'));
      } catch {
        console.warn('[static-seo] src/seo/seo.json not found, skipping.');
        return;
      }

      for (const [route, seo] of Object.entries(config)) {
        let html = template;

        // 1. Replace meta tags
        html = replaceMeta(html, seo);

        // 2. Inject per-page JSON-LD
        html = injectJsonLd(html, seo.jsonLd);

        // 3. Inject static HTML fragment inside <div id="root">
        try {
          const fragment = readFileSync(
            resolve(seoDir, 'fragments', seo.staticFile),
            'utf-8'
          );
          html = html.replace(
            '<div id="root"></div>',
            `<div id="root"><div class="seo-only">${fragment}</div></div>`
          );
        } catch {
          console.warn(`[static-seo] Fragment ${seo.staticFile} not found, skipping content injection for ${route}`);
        }

        // 4. Write output file
        const outPath =
          route === '/'
            ? resolve(distDir, 'index.html')
            : resolve(distDir, route.slice(1), 'index.html');

        mkdirSync(dirname(outPath), { recursive: true });
        writeFileSync(outPath, html);

        console.log(`[static-seo] Generated: ${route}`);
      }

      console.log('[static-seo] Done. All routes processed.');
    },
  };
}
