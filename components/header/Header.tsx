'use client'
import clsx from "clsx";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import BurgerMenu from "./subcomponents/BurgerMenu";
import navLinks from "@/data/nav";
import NavLinkDesk from "./subcomponents/NavLinkDesk";

const Header = () => {
    const [isAtTop, setIsAtTop] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <header className={clsx(
        "w-full h-header-height-mob lg:h-header-height z-[999]",
        "fixed top-0 left-0",
        "px-8",
        "flex justify-between items-center",
        "bg-transparent"
    )}>
        {/* Left compartment */}
        <div className={clsx(
            "h-fit py-2",
            "flex items-center",
            "rounded-md lg:rounded-xl border",
            "duration-300",
            isAtTop ? "bg-transparent px-0 border-transparent" : "bg-gray-700/70 px-4 backdrop-blur-sm border-[#fff5]"
        )}>
            {/* Logo/Home */}
            <Link
                href="/"
                className="block"
            >
                <Image
                    src="/assets/logo-white.svg"
                    width={92}
                    height={64}
                    className="w-8 lg:w-12"
                    alt="Logo"
                />
            </Link>
        </div>
        {/* Right compartment */}
        <div className={clsx(
            "h-fit py-1 lg:py-2 relative",
            "rounded-md lg:rounded-xl overflow-hidden border",
            "duration-300",
            isAtTop ?
                "pl-0 pr-0 border-transparent"
                :
                "pl-2 lg:pl-8 pr-2 lg:pr-2 border-[#fff5]"
        )}>
            {/* Bg */}
            <div className={clsx(
                "absolute inset-0 duration-300",
                isAtTop ?
                "bg-transparent backgrop-blur-none"
                :
                "bg-gray-700/70 backdrop-blur-sm"
            )}></div>
            {/* Nav */}
            <nav className="hidden lg:block">
                <ul className="flex items-center gap-12">
                    {navLinks.slice(1).map((el, index) => (
                        <NavLinkDesk
                            key={index}
                            item={el}
                            isLast={index >= navLinks.length - 2}
                        />
                    ))}
                </ul>
            </nav>
            {/* Burger */}
            <BurgerMenu />
        </div>
    </header>
  )
}

export default Header