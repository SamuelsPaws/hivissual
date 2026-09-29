interface Props {
    src: string;
    alt: string;
    cn?: string;
}

const ServiceVideo = ({ src, alt }: Props) => {
    return (
        <video
            autoPlay
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            src={src}
            aria-label={alt}
        />
    );
};

export default ServiceVideo;
