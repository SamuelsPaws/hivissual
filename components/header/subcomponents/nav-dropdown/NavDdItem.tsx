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
        "pressable bg-brandblack/75 hover:bg-brandgray-300/85",
        "backdrop-blur-xl",
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
