import { BlogBlock } from "@/lib/types"
import Image from "next/image";

interface Props {
    item: BlogBlock | null;
}

const Block = ({ item }: Props) => {
    if (item) {
        if (item.type === 'shared.quote') {
            return (
            <div className="w-full flex flex-col gap-4">
                <p className="text-my-xl text-brandwhite font-['Source_Serif_4'] italic">
                    “{item.message}”
                </p>
                <span className="text-my-md text-brandwhite">
                    — {item.author}
                </span>
            </div>
            )
        }

        if (item.type === 'shared.subtitulo') {
            return (
            <h2 className="
                mt-4
                text-xl md:text-3xl text-brandwhite font-semibold"
            >
                {item.text}
            </h2>
            )
        }

        if (item.type === 'shared.rich-text') {
            return (
            <p className="text-my-md text-gray-200 text-left leading-7 md:leading-8">
                {item.body}
            </p>
            )
        }

        if (item.type === 'shared.media') {
            return (
            <div className="
                w-full
                md:w-2/3 md:min-w-130
                mx-auto my-8
                flex flex-col items-center gap-8"
            >
                <div className="
                    w-full h-60 md:h-100
                    relative
                    bg-brandgray-100"
                >
                    <Image
                        src={item.src}
                        fill
                        sizes="100%"
                        className="w-full h-full object-contain"
                        alt="Fotografía propiedad de Hivissual"
                    />
                </div>
                <p className="text-my-sm text-gray-200 text-center italic leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, deserunt.
                </p>
            </div>
            )
        }
    }

    return null
}

export default Block