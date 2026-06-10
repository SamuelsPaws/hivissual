'use client'
import clsx from "clsx";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

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
        "w-full h-header-height z-[999]",
        "fixed top-0 left-0",
        "px-8",
        "flex justify-between items-center",
        "bg-transparent"
    )}>
        {/* Left compartment */}
        <div className={clsx(
            "h-fit py-2",
            "flex items-center",
            "rounded-2xl",
            "duration-300",
            isAtTop ? "bg-transparent px-0" : "bg-brandgray-200 px-4"
        )}>
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
        </div>
        {/* Right compartment */}
        <div className={clsx(
            "h-fit py-2",
            "flex items-center",
            "rounded-2xl",
            "duration-300",
            isAtTop ? "bg-transparent pl-0 pr-0" : "bg-brandgray-200 pl-8 pr-2"
        )}>
            {/* Nav */}
            <nav>
                <ul className="flex items-center gap-12">
                    <li>
                        <Link
                            href='/portafolio'
                            className="
                                relative hover-animated-underline
                                text-brandwhite text-lg font-semibold"
                        >
                            Portafolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/quien-soy'
                            className="
                                relative hover-animated-underline
                                text-brandwhite text-lg font-semibold"
                        >
                            Quién Soy
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/contacto'
                            className="
                                block px-4 py-1
                                bg-brandwhite
                                text-black text-md font-semibold
                                rounded-full"
                        >
                            Contáctame
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header