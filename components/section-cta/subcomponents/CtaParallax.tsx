import ParallaxImg from "./ParallaxImg";
import ParallaxTrack from "./ParallaxTrack";

interface Props {
    gallery: string[];
}

const CtaParallax = ({ gallery }: Props) => {
    return (
    <div className="
        w-full h-100
        overflow-hidden"
    >
        <ParallaxTrack gallery={['']} />
    </div>
    )
}

export default CtaParallax