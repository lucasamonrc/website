# Lucas Castro

A small static personal homepage for [lucasacastro.com](https://lucasacastro.com).

## Direction

- Astro static site generation only
- One Markdown-authored homepage at `src/pages/index.md`
- No client-side JavaScript, React, MDX, content collections, RSS feed, or blog
- Native CSS in `src/styles/global.css`
- System color scheme through `prefers-color-scheme`
- Cloudflare static assets deploy from `dist/`

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

- `src/pages/index.md` - homepage content
- `src/pages/404.astro` - not found page
- `src/layouts/Root.astro` - shared document shell
- `src/components/BaseHead.astro` - metadata and global stylesheet import
- `src/styles/global.css` - native CSS
- `public/` - static assets, including `me.jpg`, `favicon.svg`, and `robots.txt`
- `wrangler.jsonc` - Cloudflare static assets configuration for `dist/`

## Deployment

Build the site with `npm run build`, then deploy the generated `dist/` directory through Cloudflare using the `wrangler.jsonc` assets configuration.
