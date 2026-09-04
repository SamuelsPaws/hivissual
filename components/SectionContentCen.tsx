import clsx from "clsx";

interface Props {
    title: string;
    bgColor: string;
    children: React.ReactNode;
}

const SectionContentCen = ({ title, bgColor, children }: Props) => {
  return (
    <section className={clsx(
        "px-4 py-16 relative",
        "lg:px-16 lg:py-32",
        "overflow-clip",
        bgColor
    )}>
        <h2 className="
            mb-12 lg:mb-24
            text-center text-3xl lg:text-4xl xl:text-5xl text-brandwhite font-semibold"
        >
            {title}
        </h2>
        {children}
    </section>
  )
}

export default SectionContentCen