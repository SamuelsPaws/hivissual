import clsx from "clsx"
import { useState } from "react"

const LightboxInfo = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
    <div className={clsx(
        isOpen ? 'w-100 h-50' : 'w-24 h-12',
        "absolute bottom-4 left-4 z-[9970]",
        "bg-brandblack/70 backdrop-blur-md",
        !isOpen && "lg:hover:bg-brandblack/80",
        "rounded-lg overflow-hidden",
        "duration-300"
    )}>
        {/* Button to open info */}
        {!isOpen &&
            <button
                onClick={toggleIsOpen}
                className="
                    w-full h-full
                    text-lg text-brandwhite
                    flex justify-center items-center
                    rounded-lg"
            >
                <i className="fa fa-info-circle scale-90 mr-2"></i>
                Info
            </button>
        }
        {/* Open info */}
        {isOpen &&
            <div className="
                w-full h-full relative
                p-4
                flex flex-col
                text-brandwhite"
            >
                {/* Close button */}
                <button
                    onClick={toggleIsOpen}
                    className="
                        absolute right-2 top-2
                        px-3 py-1
                        text-lg"
                >
                    <i className="fa fa-chevron-down"></i>
                </button>
                <p className="mb-4 text-xl font-semibold">
                    Fotografía
                </p>
                {/* Wrapper for client, year, etc */}
                <div className="
                    flex-1
                    flex flex-col justify-between"
                >
                    <p className="mb-2 text-md">
                        <span className="font-semibold">Cliente: </span>Restaurante ABC
                    </p>
                    <p className="text-md">
                        <span className="font-semibold">Año: </span>2026
                    </p>
                </div>
            </div>
        }
    </div>
    )
}

export default LightboxInfo