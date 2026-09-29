'use client'
import { motion, Variants } from "motion/react";
import ServiceCardLi from "./subcomponents/ServiceCardLi";
import ServiceImage from "./subcomponents/ServiceImage";
import ServiceVideo from "./subcomponents/ServiceVideo";
import { springSmooth, viewportOnce } from "@/lib/motion";

interface ServiceMedia {
    type: 'image' | 'video';
    src: string;
    alt: string;
    cn?: string;
}

interface Props {
    title: string;
    items: string[];
    media: ServiceMedia;
}

const variants: Variants = {
    hidden: {
        opacity: 0,
        y: 32
    },
    visible: {
        opacity: 1,
        y: 0,
        border: '1px solid #fff0',
        transition: springSmooth
    },
    hovered: {
        y: -3,
        border: '1px solid #fff8',
        transition: { duration: 0.4, ease: 'easeOut' }
    }
}

const ServiceCard = ({ title, items, media }: Props) => {
  return (
    <motion.div
        className="
            w-full lg:w-100 relative
            p-8 lg:p-12
            rounded-2xl lg:rounded-4xl cursor-default
            gradient-border"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        whileHover="hovered"
    >
        <div className="
            w-full h-40 md:h-60 relative
            mb-8
            rounded-4xl overflow-hidden"
        >
            {media.type === 'image' && (
                <ServiceImage
                    src={media.src}
                    alt={media.alt}
                    cn={media.cn}
                />
            )}
            {media.type === 'video' && (
                <ServiceVideo
                    src={media.src}
                    alt={media.alt}
                    cn={media.cn}
                />
            )}
        </div>
        <h3 className="
            mb-8 lg:mb-8
            text-brandwhite text-xl md:text-2xl font-semibold"
        >
            {title}
        </h3>
        <ul className="
            flex flex-col gap-4
            text-my-md"
        >
            {items.map((el, index) => (
                <ServiceCardLi
                    key={index}
                    text={el}
                />
            ))}
        </ul>
    </motion.div>
  )
}

export default ServiceCard
