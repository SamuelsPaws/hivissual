import { motion } from "motion/react";

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
            bg-transparent lg:hover:bg-brandwhite/10 duration-100
            border border-gray-200 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
    >
        {text}
    </motion.button>
    )
}

export default SelectBtn