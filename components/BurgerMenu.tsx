'use client'
import Link from "next/link";
import { useEffect, useState } from "react"

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = (): void => {
            setIsOpen(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="
            h-6 aspect-square lg:hidden
            text-white-1"
        >
            {/* Burger icon */}
            <button
                onClick={toggleMenu}
                className="block w-full h-full z-110 relative"
            >
                <div className={`
                    h-0.5 w-full bg-brandwhite
                    absolute top-1 left-0
                    duration-300 ease-in-out
                    ${isOpen ? ' rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                ></div>
                <div className={`
                    h-0.5 w-full bg-brandwhite
                    absolute left-0 top-1/2 -translate-y-1/2
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                ></div>
                <div className={`
                    h-0.5 w-full bg-brandwhite
                    absolute bottom-1 left-0
                    duration-300 ease-in-out
                    ${isOpen ? ' -rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                ></div>
            </button>
            {/* Actual menu */}
            <div className={`
                w-full h-[60vh]
                pt-header-height-mob px-8
                ${isOpen ? 'fixed' : 'hidden'}
                top-0 left-0
                bg-brandgray-200 shadow-md`}
            >
                <ul className="
                    w-full h-full
                    flex flex-col justify-center items-end gap-6
                    text-xl font-semibold text-white-1"
                >
                    <li>
                        <Link
                            href='/'
                            className="px-2"
                            onClick={toggleMenu}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/portafolio'
                            className="px-2"
                            onClick={toggleMenu}
                        >
                            Portafolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/quien-soy'
                            className="px-2"
                            onClick={toggleMenu}
                        >
                            Quién Soy
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/contacto'
                            className="px-2"
                            onClick={toggleMenu}
                        >
                            Contáctame
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu