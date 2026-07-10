'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

const variants = {
    left: {
        hidden: {
            opacity: 0,
            x: -16
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4
            }
        }
    },
    right: {
        hidden: {
            opacity: 0,
            x: 16
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4
            }
        }
    },
}

const ImageGrid = () => {
  return (
    <div className="
        w-full h-100
        lg:w-120 lg:h-160
        grid grid-cols-[1fr_1fr]"
    >
        <motion.div
            className="
                w-[140%] aspect-square relative
                rounded-4xl overflow-hidden"
            variants={variants.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-24px 0px' }}
        >
            <Image
                src="/assets/about-2.webp"
                fill
                sizes="100%"
                className="w-full h-full object-cover scale-200"
                alt="Fotografía del fundador de la marca"
            />
        </motion.div>
        <div></div>
        <div></div>
        <motion.div
            className="
                w-[140%] aspect-square relative
                place-self-end
                rounded-4xl overflow-hidden shadow-[-4px_-4px_8px_rgb(0,0,0,0.15)]"
            variants={variants.right}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-24px 0px' }}
        >
            <Image
                src="/assets/about-3.webp"
                fill
                sizes="100%"
                className="w-full h-full object-cover scale-200"
                alt="Fotografía del fundador de la marca"
            />
        </motion.div>
    </div>
  )
}

export default ImageGrid