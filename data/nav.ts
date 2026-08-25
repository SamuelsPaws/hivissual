import { NavLinkType } from "@/lib/types"

const navLinks: NavLinkType[] = [
    {
        label: 'Inicio',
        href: '/',
        external: false
    },
    {
        label: 'Portafolio',
        href: '/portafolio',
        external: false
    },
    {
        label: 'Blog',
        href: '/blog',
        external: false
    },
    {
        label: 'Quién Soy',
        href: '/quien-soy',
        external: false
    },
    {
        label: 'Cotizar',
        href: '/cotizaciones',
        external: false
    },
] as const

export default navLinks