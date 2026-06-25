'use client'
import { Media } from "@/lib/types";
import { useEffect, useRef, useState } from "react"
import MediaViewer from "./MediaViewer";
import Link from "next/link";
import clsx from "clsx";
import LightboxInfo from "./LightboxInfo";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    media: Media | null;
    previousMedia: () => void;
    nextMedia: () => void;
}

const Lightbox = ({ isOpen, onClose, media, previousMedia, nextMedia }: Props) => {
    const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false)
    const touchStartX = useRef<number | null>(null)

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchEndX = e.changedTouches[0].clientX

        const deltaX = touchStartX.current !== null ? touchStartX.current - touchEndX : 0

        if (deltaX > 75) {
            nextMedia()
            setIsInfoOpen(false)
        }

        if (deltaX < -75) {
            previousMedia()
            setIsInfoOpen(false)
        }
    }

    const toggleIsInfoOpen = () => {
        setIsInfoOpen(!isInfoOpen)
    }

    useEffect(() => {
        if (!isOpen) return

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose()
            }

            if (e.key === 'ArrowRight') {
                nextMedia()
            }
            
            if (e.key === 'ArrowLeft') {
                previousMedia()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [isOpen])
    
    if (!isOpen) return null

    return (
    <div>
        {/* Backdrop */}
        <div
            onClick={onClose}
            className="
                fixed top-0 left-0 z-[9900]
                w-screen h-screen
                bg-black/80"
        >
            {/* X button */}
            <button
                onClick={onClose}
                className="
                    absolute z-[9910]
                    left-4 top-4
                    lg:left-8 lg:top-8"
            >
                <img
                    src="/assets/x.svg"
                    className="w-6 h-6 opacity-90"
                />
            </button>
        </div>
        {/* Prev and next buttons */}
        <button
            onClick={previousMedia}
            className="
                fixed left-0 top-1/2 -translate-y-1/2 z-[9910]
                h-60 px-8
                hidden lg:block
                bg-brandwhite/40 lg:hover:bg-brandwhite/70 duration-200
                rounded-r-full"
        >
            <img
                src="/assets/black-arrow-left.svg"
                className="
                    w-8 h-8
                    absolute top-1/2 left-1/2 -translate-1/2"
            />
        </button>
        <button
            onClick={nextMedia}
            className="
                fixed right-0 top-1/2 -translate-y-1/2 z-[9910]
                h-60 px-8
                hidden lg:block
                bg-brandwhite/40 lg:hover:bg-brandwhite/70 duration-200
                rounded-l-full"
        >
            <img
                src="/assets/black-arrow-right.svg"
                className="
                    w-8 h-8
                    absolute top-1/2 left-1/2 -translate-1/2"
            />
        </button>
        {/* Media viewer wrapper */}
        <div
            onClick={toggleIsInfoOpen}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={clsx(
                "fixed top-1/2 left-1/2 -translate-1/2 z-[9950]",
                "w-[80vw] aspect-[9/16] lg:w-[80vw] lg:aspect-auto lg:h-[80vh]",
                "flex flex-col",
                "bg-brandgray-200 rounded-2xl overflow-hidden"
            )}
        >
            <MediaViewer
                media={media}
            />
            {media !== null && media.type === 'project' &&
                <div className="
                    absolute bottom-4 left-4 z-[9960]
                    w-140 p-8
                    bg-brandblack/70 backdrop-blur-md
                    text-brandwhite
                    rounded-2xl"
                >
                    <p className="mb-4 text-2xl font-semibold">
                        Cliente: {media?.client}
                    </p>
                    <p className="mb-8 text-md">
                        Campaña de crecimiento en redes sociales con fotografía y producción de videos publicitarios
                    </p>
                    <p className="mb-6 text-xl font-semibold">
                        ¿Quieres saber cómo ayudé a este cliente a impulsar su marca?
                    </p>
                    <Link
                        href={`/proyectos/${media.projectSlug}`}
                        className="
                            block w-fit px-6 py-3
                            text-lg text-black font-semibold
                            bg-brandwhite rounded-full"
                    >
                        Ver Proyecto
                    </Link>
                </div>
            }
            {media !== null && media.type === 'video' &&
                <div className="
                    w-full h-[15%]
                    px-2 lg:px-8 py-2 lg:py-0
                    flex
                    flex-col items-start justify-end gap-2
                    lg:flex-row lg:items-center lg:justify-between lg:gap-0
                    bg-brandblack-200"
                >
                    <span className="ml-2 text-sm lg:text-lg text-brandwhite">
                        <span className="mr-2 font-semibold">
                            Cliente:
                        </span>
                        {media.client}
                    </span>
                    {media.instaUrl !== null &&
                        <a
                            href={media.instaUrl}
                            className="
                                block px-4 lg:px-6 py-2 lg:py-2
                                bg-linear-30 from-fuchsia-700 to-amber-600
                                text-sm lg:text-lg text-brandwhite font-semibold
                                rounded-full"
                        >
                            Mira este post en Instagram
                        </a>
                    }
                </div>
            }
            {media !== null && media.type === 'image' &&
                <LightboxInfo
                    isOpen={isInfoOpen}
                    type={media.type}
                    client={media.client}
                    year={media.year}
                />
            }
        </div>
    </div>
    )
}

export default Lightbox