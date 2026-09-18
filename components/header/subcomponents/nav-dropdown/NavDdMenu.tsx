import { motion } from "motion/react"
import { RefObject, SetStateAction, useEffect, useRef } from "react";
import NavDdItem from "./NavDdItem";
import { NavDdItemType } from "@/lib/types";
import { springSnappy } from "@/lib/motion";

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
            ...springSnappy
        }
    }
}

interface Props {
    isDdOpen: boolean;
    setIsDdOpen: React.Dispatch<SetStateAction<boolean>>;
    btnRef: RefObject<HTMLButtonElement | null>;
    items: NavDdItemType[] | null;
}

const NavDdMenu = ({ isDdOpen, setIsDdOpen, btnRef, items }: Props) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isDdOpen) return

        function handlePointerDown(e: PointerEvent) {
            if (!ref.current) return
        
            if (!ref.current.contains(e.target as Node) && !btnRef.current?.contains(e.target as Node)) {
                setIsDdOpen(false)
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
        }
    }, [btnRef, isDdOpen, setIsDdOpen])

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
            border border-white/20
            rounded-2xl overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.38)]
            backdrop-blur-xl"
        variants={variants}
        animate={isDdOpen ? 'open' : 'closed'}
        initial={false}
        style={{ transformOrigin: "top center" }}
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
