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
            <video
                src={media.src}
                controls
                className="w-full h-full object-contain z-[9960]"
            />
        )
    }

    return null
}

export default MediaViewer