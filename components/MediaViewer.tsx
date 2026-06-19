import { Media } from "@/lib/types"
import Image from "next/image";

interface Props {
    media: Media | null;
}

const MediaViewer = ({ media }: Props) => {
    if (!media) return null

    if (media.type === 'image' || media.type === 'project') {
        return (
            <Image
                src={media.src}
                fill
                sizes="100%"
                className="w-full h-full object-contain z-[9960]"
                alt={media.alt}
            />
        )
    }

    if (media.type === 'video') {
        return (
            <iframe
                src={media.src}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                title="Set up your first video"
                className="w-[70vw] aspect-video z-[9960]"
            ></iframe>
        )
    }

    return null
}

export default MediaViewer