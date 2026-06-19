import clsx from "clsx";
import Image from "next/image"

interface Props {
    spansTwoRows: boolean;
    spansTwoCols: boolean;
}

const MasonryItem = ({ spansTwoRows, spansTwoCols }: Props) => {
  return (
    <div className={clsx(
        "relative",
        "rounded-4xl overflow-hidden",
        spansTwoRows && "md:row-span-2",
        spansTwoCols && "col-span-2 md:col-span-1"
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