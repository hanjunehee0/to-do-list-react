import { RouterProvider } from 'react-router'

import QueryClientBoundary from '@/query-client-boundary.tsx'
import { router } from '@/router.tsx'

import './App.css'

function App() {
    return (
        <QueryClientBoundary>
            <RouterProvider router={router} />
        </QueryClientBoundary>
    )
}

export default App
