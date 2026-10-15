import { Media } from "@/lib/types"
import Image from "next/image";

interface Props {
    media: Media | null;
}

const MediaViewer = ({ media }: Props) => {
    console.log(media);
    

    if (!media) return null

    if (media.type === 'image') {
        return (
        <Image
            src={media.src}
            fill
            sizes="82vw"
            className="w-full h-full object-contain z-[9960]"
            alt={media.alt}
        />
        )
    }

    if (media.type === 'video') {
        return (
        <video
            src={media.src}
            autoPlay
            loop
            playsInline
            className="w-full h-full object-contain z-[9960]"
            aria-label={media.alt}
        ></video>
        )
    }

    return null
}

export default MediaViewer