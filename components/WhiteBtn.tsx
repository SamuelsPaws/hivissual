import clsx from "clsx";
import Link from "next/link";

interface Props {
    href: string;
    label: string;
    centered?: boolean;
}

const WhiteBtn = ({ href, label, centered = true }: Props) => {
    return (
    <Link
        href={href}
        className={clsx(
            "block w-fit",
            centered && "mx-auto",
            "px-6 py-3",
            "lg:px-8 lg:py-4",
            "bg-brandwhite",
            "text-black text-myf-lg font-semibold",
            "rounded-full",
            "md:hover:scale-110 duration-400 ease-out"
        )}
    >
        {label}
    </Link>
    )
}

export default WhiteBtn