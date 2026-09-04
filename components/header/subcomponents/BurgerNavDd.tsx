import CustomIcon from "@/components/CustomIcon";
import { NavLinkType } from "@/lib/types"
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

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
    <li className="flex flex-col items-end">
        <button
            onClick={handleBtnClick}
            className="
                px-2
                flex items-center gap-1
                text-lg"
        >
            <span>{item.label}</span>
            <CustomIcon
                iconId="chevronDown"
                className={clsx("scale-110 duration-400", isExpanded && "-rotate-180")}
            />
        </button>
        <div className={clsx(
            "grid transition-[grid-template-rows] duration-400 ease-out",
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}>
            <div className="overflow-hidden">
                <ul className="
                    w-full mt-2
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
    </li>
    )
}

export default BurgerNavDd