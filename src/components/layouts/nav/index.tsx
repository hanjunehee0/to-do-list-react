import { Link } from 'react-router'

import { router } from '@/router'

const Nav = () => {
    const menus = router?.routes || []
    return (
        <nav>
            <ul className="flex gap-[6px]">
                {menus[0].children &&
                    menus[0].children.map((menu, i) => (
                        <li key={`${menu.path}+${i}`} className="font-bold">
                            <Link to={`${menu.path ? menu.path : ''}`}>
                                {menu && menu?.path ? menu?.path?.split('/') : ''}
                            </Link>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Nav
