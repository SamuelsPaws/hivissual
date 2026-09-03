'use client'
import navLinks from "@/data/nav";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react"
import NavLinkMob from "./NavLinkMob";
import BurgerNavDd from "./BurgerNavDd";

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
            <div className={clsx(
                isOpen ? 'fixed' : 'hidden',
                "top-0 left-0",
                "w-screen h-[75vh]",
                "pt-header-height-mob px-8",
                "bg-linear-to-t from-brandblack to-brandgray-100",
                "border-b border-b-white/10 shadow-md"
            )}>
                <ul className="
                    w-full h-full
                    flex flex-col justify-center items-end gap-4
                    font-semibold text-brandwhite"
                >
                    {navLinks.map((el, index) => {
                        if (el.dropdown) {
                            return (
                            <BurgerNavDd
                                key={index}
                                item={el}
                                onLinkClick={toggleMenu}
                            />
                            )
                        }

                        return (
                        <NavLinkMob
                            key={index}
                            item={el}
                            onClick={toggleMenu}
                        />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu