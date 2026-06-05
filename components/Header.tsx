import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="
        w-full h-header-height z-[999]
        fixed top-0 left-0
        px-8
        flex justify-between items-center
        bg-transparent"
    >
        {/* Logo/Home */}
        <Link
            href="/"
            className="block"
        >
            <Image
                src="/assets/logo.png"
                width={1567}
                height={1041}
                className="w-12"
                alt="Logo"
            />
        </Link>
        {/* Nav */}
        <nav>
            <ul className="flex items-center gap-12">
                <li>
                    <Link
                        href='/portafolio'
                        className="text-brandwhite text-lg font-semibold"
                    >
                        Portafolio
                    </Link>
                </li>
                <li>
                    <Link
                        href='/quien-soy'
                        className="text-brandwhite text-lg font-semibold"
                    >
                        Quién Soy
                    </Link>
                </li>
                <li>
                    <Link
                        href='/contacto'
                        className="
                            block px-3 py-1
                            bg-brandwhite
                            text-black text-lg font-semibold
                            rounded-full"
                    >
                        Contáctame
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header