import { NavLinkType } from "@/lib/types"
import Link from "next/link";

interface Props {
    item: NavLinkType;
    onClick: () => void;
}

const NavLinkMob = ({ item, onClick }: Props) => {
    return (
    <li>
        <Link
            href={item.href}
            className="px-2"
            onClick={onClick}
        >
            {item.label}
        </Link>
    </li>
    )
}

export default NavLinkMob