'use client'
import navLinks from "@/data/nav";
import clsx from "clsx";
import { useEffect, useState } from "react"
import NavLinkMob from "./NavLinkMob";
import BurgerNavDd from "./BurgerNavDd";
import { AnimatePresence, motion } from "motion/react";
import { springSmooth } from "@/lib/motion";

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
                className="pressable block w-full h-full z-110 relative"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
                <div className={`
                    h-0.5 w-full bg-brandwhite
                    absolute top-1 left-0
                    transition-[transform,top,left] duration-300 ease-[var(--ease-premium)]
                    ${isOpen ? ' rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                ></div>
                <div className={`
                    h-0.5 w-full bg-brandwhite
                    absolute left-0 top-1/2 -translate-y-1/2
                    transition-opacity duration-200
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                ></div>
                <div className={`
                    h-0.5 w-full bg-brandwhite
                    absolute bottom-1 left-0
                    transition-[transform,top,left] duration-300 ease-[var(--ease-premium)]
                    ${isOpen ? ' -rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                ></div>
            </button>
            {/* Actual menu */}
            <AnimatePresence>
            {isOpen && (
            <motion.div
                className={clsx(
                    "fixed top-0 left-0",
                    "w-screen h-[75vh]",
                    "pt-header-height-mob px-8",
                    "bg-brandblack/90 backdrop-blur-2xl",
                    "border-b border-b-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                )}
                initial={{ opacity: 0, y: -20, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.985 }}
                transition={springSmooth}
                style={{ transformOrigin: "top right" }}
            >
                <motion.ul
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                        closed: { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
                        open: { transition: { delayChildren: 0.08, staggerChildren: 0.045 } },
                    }}
                    className="
                    w-full h-full
                    flex flex-col justify-center items-end gap-4
                    font-semibold text-brandwhite"
                >
                    {navLinks.map((el, index) => {
                        if (el.dropdown) {
                            return <BurgerNavDd key={index} item={el} onLinkClick={toggleMenu} />
                        }

                        return <NavLinkMob key={index} item={el} onClick={toggleMenu} />
                    })}
                </motion.ul>
            </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}

export default BurgerMenu
