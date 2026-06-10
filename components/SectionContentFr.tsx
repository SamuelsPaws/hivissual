import clsx from "clsx";

interface Props {
    bgColor: string;
    children: React.ReactNode;
}

const SectionContentFr = ({ bgColor, children }: Props) => {
  return (
    <section className={clsx(
        "px-4 py-8",
        "lg:px-16 lg:py-24",
        bgColor
    )}>
        {children}
    </section>
  )
}

export default SectionContentFr