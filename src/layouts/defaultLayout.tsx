import { Outlet } from 'react-router'

import { DefaultFooter } from '@/components/layouts/footers/defaultFooter.tsx'
import { DefaultHeader } from '@/components/layouts/headers/deaultHeader.tsx'

export const DefaultLayout = () => {
    return (
        <div>
            {/*  Header  */}
            <DefaultHeader />
            {/*  Main  */}
            <main className="mx-auto w-full max-w-[1200px] min-h-[90vh] h-full flex items-center justify-center">
                <Outlet />
            </main>
            {/*  Footer   */}
            <DefaultFooter />
        </div>
    )
}
