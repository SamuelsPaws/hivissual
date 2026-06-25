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
                src={media.imageUrl}
                fill
                sizes="100%"
                className="w-full h-full object-contain z-[9960]"
                alt={media.alt}
            />
        )
    }

    if (media.type === 'video' && media.videoUrl) {
        return (
            <video
                src={media.videoUrl}
                autoPlay
                loop
                playsInline
                className="w-full h-[80%] lg:h-[85%] object-contain z-[9960]"
            ></video>
        )
    }

    return null
}

export default MediaViewer