import { motion } from "motion/react";
import { fadeIn, press, springSnappy } from "@/lib/motion";

interface Props {
    text: string;
    onClick: () => void;
}

const SelectBtn = ({ text, onClick }: Props) => {
    return (
    <motion.button
        onClick={onClick}
        className="
            w-60 py-4
            text-brandwhite text-sm
            bg-transparent lg:hover:bg-brandwhite/10
            border border-gray-200 rounded-2xl"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        whileTap={press}
        transition={springSnappy}
    >
        {text}
    </motion.button>
    )
}

export default SelectBtn
