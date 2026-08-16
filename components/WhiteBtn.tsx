import Link from "next/link";

interface Props {
    href: string;
    label: string;
}

const WhiteBtn = ({ href, label }: Props) => {
    return (
    <Link
        href={href}
        className="
            block w-fit mx-auto
            px-6 py-3
            lg:px-8 lg:py-4
            bg-brandwhite
            text-black text-md md:text-xl font-semibold
            rounded-full
            md:hover:scale-110 duration-400 ease-out"
    >
        {label}
    </Link>
    )
}

export default WhiteBtn