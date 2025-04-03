import { Outlet } from 'react-router'

import { DefaultFooter } from '@/components/layouts/footers/defaultFooter.tsx'
import { DefaultHeader } from '@/components/layouts/headers/deaultHeader.tsx'

export const DefaultLayout = () => {
    return (
        <div>
            {/*  Header  */}
            <DefaultHeader />
            {/*  Main  */}
            <main>
                <Outlet />
            </main>
            {/*  Footer   */}
            <DefaultFooter />
        </div>
    )
}
