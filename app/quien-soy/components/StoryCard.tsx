import clsx from "clsx";

interface Props {
    text: string;
    className?: string;
}

const StoryCard = ({ text, className }: Props) => {
    return (
    <div className={clsx(
        "w-full md:w-120 h-full",
        "p-8 relative",
        "flex justify-center items-center",
        "bg-brandblack-200",
        "gradient-border rounded-2xl",
        className
    )}>
        <p className="text-brandwhite text-my-sm text-justify">
            {text}
        </p>
    </div>
    )
}

export default StoryCard