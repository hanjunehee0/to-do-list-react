import HeaderUtils from '@/components/layouts/headers/headerUtils/index.tsx'
import HeaderLogo from '@/components/layouts/headers/logo'
import Nav from '@/components/layouts/headers/nav/index.tsx'

export const DefaultHeader = () => {
    return (
        <header className="flex px-[20px] py-[12px] justify-between relative bg-[#ffffff] border border-b-[#333333]">
            <HeaderLogo />
            <Nav />
            <HeaderUtils />
        </header>
    )
}
