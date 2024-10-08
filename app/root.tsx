import { LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Toaster } from 'sonner'
import soonner from '~/sonner.css?url'
import tailwind from '~/tailwind.css?url'

export const links: LinksFunction = () => [
  {
    href: tailwind,
    rel: 'stylesheet',
  },
  {
    href: soonner,
    rel: 'stylesheet',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Toaster richColors={true} position="top-right" closeButton />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
