# test1

Minimal TanStack Start app showing **WIP**.

Website: https://adokce.github.io/test1/

## Development

Requires Node.js 24.

```sh
npm ci
npm run dev
```

Open http://localhost:3000/test1/.

## Deployment

```sh
npm run build
```

Vite uses `/test1/` as its base, and TanStack Router uses the same base path. TanStack Start prerenders the route into `dist/client/index.html`; generated asset URLs include `/test1/`.

GitHub Actions builds and deploys only `dist/client` to GitHub Pages on pushes to `main`. Pages must use **GitHub Actions** as its publishing source.

The production build was smoke-tested at `/test1/` using static-file hosting, with no Start application server. GitHub Pages cannot run Start server functions or runtime SSR; additional pages must be prerendered.

- [TanStack Start static prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering)
- [Vite public base path](https://vite.dev/guide/build.html#public-base-path)
