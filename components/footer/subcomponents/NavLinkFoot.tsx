import { NavLinkType } from "@/lib/types"
import Link from "next/link";

interface Props {
    item: NavLinkType;
}

const NavLinkFoot = ({ item }: Props) => {
    return (
    <li>
        <Link
            href={item.href}
            className="hover:underline"
        >
            {item.label}
        </Link>
    </li>
    )
}

export default NavLinkFoot