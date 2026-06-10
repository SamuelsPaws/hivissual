import clsx from "clsx";

interface Props {
    title: string;
    bgColor: string;
    children: React.ReactNode;
}

const SectionContentCen = ({ title, bgColor, children }: Props) => {
  return (
    <section className={clsx(
        "px-4 py-8",
        "lg:px-16 lg:py-24",
        bgColor
    )}>
        <h2 className="
            mb-24
            text-center text-3xl lg:text-5xl text-brandwhite font-semibold"
        >
            {title}
        </h2>
        {children}
    </section>
  )
}

export default SectionContentCen