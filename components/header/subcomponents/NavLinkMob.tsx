import { NavDdItemType, NavLinkType } from "@/lib/types"
import Link from "next/link";
import { motion } from "motion/react";
import { springSnappy } from "@/lib/motion";

interface Props {
    item: NavLinkType | NavDdItemType;
    onClick: () => void;
}

const NavLinkMob = ({ item, onClick }: Props) => {
    return (
    <motion.li variants={{ closed: { opacity: 0, y: -8 }, open: { opacity: 1, y: 0, transition: springSnappy } }}>
        <Link
            href={item.href}
            className="pressable block px-2 py-1 text-lg"
            onClick={onClick}
        >
            {item.label}
        </Link>
    </motion.li>
    )
}

export default NavLinkMob
