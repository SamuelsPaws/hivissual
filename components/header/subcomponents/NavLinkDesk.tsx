import { NavLinkType } from "@/lib/types";
import Link from "next/link";

interface Props {
    item: NavLinkType;
    isLast: boolean;
}

const NavLinkDesk = ({ item, isLast }: Props) => {
    const cn = "relative hover-animated-underline text-brandwhite text-lg font-semibold"
    const cnLast = `
        block px-4 py-1 relative
        bg-brandwhite
        text-black text-md font-semibold
        rounded-full
        md:hover:-translate-y-0.5 duration-200
    `

    if (item.external) {
        return (
        <li>
            <a
                href={item.href}
                target="_blank"
                className={isLast ? cnLast : cn}
            >
                {item.label}
            </a>
        </li>
        )
    }

    return (
    <li>
        <Link
            href={item.href}
            className={isLast ? cnLast : cn}
        >
            {item.label}
        </Link>
    </li>
    )
}

export default NavLinkDesk