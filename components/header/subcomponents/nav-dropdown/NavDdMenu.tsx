import { motion } from "motion/react"
import Link from "next/link"
import { SetStateAction, useEffect, useRef } from "react";
import NavDdItem from "./NavDdItem";
import { NavDdItemType } from "@/lib/types";

const variants = {
    closed: {
        opacity: 0,
        y: -10,
        pointerEvents: 'none'
    },
    open: {
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        transition: {
            duration: 0.2
        }
    }
}

interface Props {
    isDdOpen: boolean;
    setIsDdOpen: React.Dispatch<SetStateAction<boolean>>;
    btnCurrent: HTMLButtonElement | null;
    items: NavDdItemType[] | null;
}

const NavDdMenu = ({ isDdOpen, setIsDdOpen, btnCurrent, items }: Props) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isDdOpen) return

        function handlePointerDown(e: PointerEvent) {
            if (!ref.current) return
        
            if (!ref.current.contains(e.target as Node) && !btnCurrent?.contains(e.target as Node)) {
                setIsDdOpen(false)
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
        }
    }, [btnCurrent, isDdOpen])

    const handleClick = () => {
        setIsDdOpen(false)
    }

    return (
    <motion.div
        ref={ref}
        className="
            absolute top-[200%] left-1/2 -translate-x-1/2
            w-[200%]
            flex flex-col
            text-center
            border border-gray-500
            rounded-2xl overflow-hidden shadow-lg"
        variants={variants}
        animate={isDdOpen ? 'open' : 'closed'}
        initial={false}
    >
        {items && items.map((el, index) => (
            <NavDdItem
                key={index}
                item={el}
                onClick={handleClick}
                isLast={index >= items.length - 1}
            />
        ))}
    </motion.div>
    )
}

export default NavDdMenu