import { createRouter, type Router } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export type AppRouter = Router<typeof routeTree>

export function getRouter(): AppRouter {
  return createRouter({
    routeTree,
    basepath: import.meta.env.BASE_URL,
    scrollRestoration: true,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: AppRouter
  }
}
