import { NavDdItemType } from "@/lib/types";
import clsx from "clsx";
import Link from "next/link";

interface Props {
    item: NavDdItemType;
    onClick: () => void;
    isLast: boolean;
}

const NavDdItem = ({ item, onClick, isLast }: Props) => {
    const cn = clsx(
        "p-4",
        "grid place-content-center",
        "text-md",
        "bg-gray-700/70 hover:bg-gray-500/70 duration-200",
        "backdrop-blur-md",
        !isLast && "border-b border-gray-500"
    )

    return (
    <Link
        onClick={onClick}
        href={item.href}
        className={cn}
    >
        {item.label}
    </Link>
    )
}

export default NavDdItem