import CustomIcon from "@/components/CustomIcon";
import { NavLinkType } from "@/lib/types"
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { springSnappy } from "@/lib/motion";

interface Props {
    item: NavLinkType;
    onLinkClick: () => void;
}

const BurgerNavDd = ({ item, onLinkClick }: Props) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    const handleBtnClick = () => {
        setIsExpanded(prev => !prev)
    }

    return (
    <motion.li variants={{ closed: { opacity: 0, y: -8 }, open: { opacity: 1, y: 0, transition: springSnappy } }} className={clsx(
        "flex flex-col items-end",
        "border-y transition-[border-color,padding] duration-600 ease-[var(--ease-premium)]",
        isExpanded ? "border-brandwhite py-2" : "border-transparent py-0"
    )}>
        <button
            onClick={handleBtnClick}
            className="pressable
                px-2
                flex items-center gap-1
                text-lg"
        >
            <span>{item.label}</span>
            <CustomIcon
                iconId="chevronDown"
                className={clsx("scale-110 transition-transform duration-300 ease-[var(--ease-premium)]", isExpanded && "-rotate-180")}
            />
        </button>
        <div className={clsx(
            "grid transition-[grid-template-rows] duration-600 ease-[var(--ease-premium)]",
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}>
            <div className="overflow-hidden">
                <ul className="
                    w-full mt-4
                    px-2
                    flex flex-col items-end gap-4
                    text-md"
                >
                    {item.dropdown && item.dropdown.map((el, index) => (
                        <li key={index}>
                            <Link
                                href={el.href}
                                onClick={onLinkClick}
                            >
                                {el.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </motion.li>
    )
}

export default BurgerNavDd
