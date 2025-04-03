import { lazy } from 'react'
import { RouteObject, createBrowserRouter } from 'react-router'

import { DefaultLayout } from '@/layouts/defaultLayout.tsx'

const AboutPage = lazy(() => import('@/pages/about/index.tsx'))
const MainPage = lazy(() => import('@/pages/main.tsx'))
const ToDoPage = lazy(() => import('@/pages/todo/index.tsx'))
const EtcPage = lazy(() => import('@/pages/etc/index.tsx'))

const routes: RouteObject[] = [
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                handle: { crumb: 'Main Page' },
                element: <MainPage />,
            },
            {
                path: '/about',
                handle: { crumb: 'About Page' },
                element: <AboutPage />,
            },
            {
                path: '/todo',
                handle: { crumb: 'ToDo Page' },
                element: <ToDoPage />,
            },
            {
                path: '/etc',
                handle: { crumb: 'Etc Page' },
                element: <EtcPage />,
            },
        ],
    },
]

export const router = createBrowserRouter(routes)
