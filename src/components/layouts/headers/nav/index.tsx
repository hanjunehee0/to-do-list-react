import { NavLink } from 'react-router'

import { router } from '@/router.tsx'

const Nav = () => {
    const menus = router?.routes || []
    return (
        <nav className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <ul className="flex gap-[16px]">
                {menus[0].children &&
                    menus[0].children.map((menu, i) => (
                        <li key={`${menu.path}+${i}`} className="font-bold">
                            <NavLink
                                className={({ isActive, isPending }) => {
                                    return isActive && !isPending
                                        ? '!text-[#4b8ecc] text-2xl'
                                        : 'text-2xl'
                                }}
                                to={`${menu.path ? menu.path : ''}`}
                            >
                                {menu && menu?.path ? menu?.path?.split('/') : ''}
                                {menu && menu?.path === '/' ? 'Main' : ''}
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Nav
