import clsx from "clsx";
import Image from "next/image"

interface Props {
    spansTwo: boolean;
}

const MasonryItem = ({ spansTwo }: Props) => {
  return (
    <div className={clsx(
        "relative",
        "rounded-4xl overflow-hidden",
        spansTwo ? "row-span-2" : "row-span-1"
    )}>
        <Image
            src="/assets/stock.jpg"
            fill
            sizes="100%"
            className="object-cover"
            alt="Stock"
        />
    </div>
  )
}

export default MasonryItem