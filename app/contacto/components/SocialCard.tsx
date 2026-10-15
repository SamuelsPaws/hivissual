'use client'
import clsx from "clsx";
import { motion } from "motion/react";
import { fadeUp, lift, press, springSnappy, viewportOnce } from "@/lib/motion";
import CustomIcon, { type IconId } from "@/components/CustomIcon"

interface Props {
    iconClass?: string;
    iconId?: IconId
    text: string;
    href: string;
}

const SocialCard = ({ iconClass, iconId, text, href }: Props) => {
  return (
    <motion.a
        href={href}
        target="_blank"
        className="
            w-fit p-8 relative
            flex items-center gap-4
            text-xl lg:text-2xl text-gray-300
            gradient-border rounded-2xl
            outline outline-transparent lg:hover:outline-gray-300"
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        whileHover={lift}
        whileTap={press}
        transition={springSnappy}
        viewport={viewportOnce}
    >
        {iconId ? (
            <CustomIcon iconId={iconId} />
        ) : (
            <i className={clsx("fa", iconClass)}></i>
        )}
        <span>{text}</span>
    </motion.a>
  )
}

export default SocialCard
