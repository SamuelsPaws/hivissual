import { NavLinkType } from "@/lib/types"

const navLinks: NavLinkType[] = [
    {
        label: 'Inicio',
        href: '/',
        external: false,
        dropdown: null
    },
    {
        label: 'Portafolio',
        href: '/portafolio',
        external: false,
        dropdown: [
            {
                label: 'Corporativo',
                href: '/portafolio/corporativo',
                external: false
            },
            {
                label: 'Cinemático',
                href: '/portafolio/cinematico',
                external: false
            },
            {
                label: 'Redes Sociales',
                href: '/portafolio/redes-sociales',
                external: false
            },
        ]
    },
    {
        label: 'Blog',
        href: '/blog',
        external: false,
        dropdown: null
    },
    {
        label: 'Quién Soy',
        href: '/quien-soy',
        external: false,
        dropdown: null
    },
    {
        label: 'Cotizar',
        href: '/cotizaciones',
        external: false,
        dropdown: null
    },
] as const

export default navLinks