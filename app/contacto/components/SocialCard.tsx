import clsx from "clsx";

interface Props {
    iconClass: string;
    text: string;
    href: string;
}

const SocialCard = ({ iconClass, text, href }: Props) => {
  return (
    <a
        href={href}
        target="_blank"
        className="
            w-fit p-8 relative
            flex items-center gap-4
            text-xl lg:text-2xl text-gray-300
            gradient-border rounded-2xl
            outline outline-transparent lg:hover:outline-gray-300 duration-200"
    >
        <i className={clsx("fa", iconClass)}></i>
        <span>{text}</span>
    </a>
  )
}

export default SocialCard