import clsx from "clsx";

interface Props {
    title: string;
    bgColor: string;
    children: React.ReactNode;
}

const SectionContentSt = ({ title, bgColor, children }: Props) => {
  return (
    <section className={clsx(
        "px-4 py-16",
        "md:px-16 md:py-32",
        bgColor
    )}>
        <h2 className="
            mb-12 lg:mb-20
            text-center lg:text-left text-3xl md:text-5xl xl:text-6xl text-brandwhite font-semibold"
        >
            {title}
        </h2>
        {children}
    </section>
  )
}

export default SectionContentSt