import itemTypeMapper from "@/lib/utils/itemTypeMapper";
import clsx from "clsx"

interface Props {
    isOpen: boolean;
    type: string;
    client: string;
    year: string | null;
}

const LightboxInfo = ({ isOpen, type, client, year }: Props) => {

    return (
    <div className={clsx(
        isOpen ? 'w-[96%] lg:w-100 h-30 lg:h-50' : 'w-24 h-12',
        "absolute bottom-[2%] left-[2%] z-[9970]",
        "bg-brandblack/70 backdrop-blur-md",
        !isOpen && "lg:hover:bg-brandblack/80",
        "rounded-lg overflow-hidden",
        "duration-300"
    )}>
        {/* Button to open info */}
        {!isOpen &&
            <div className="
                w-full h-full
                text-lg text-brandwhite
                flex justify-center items-center
                rounded-lg
                cursor-pointer"
            >
                <i className="fa fa-info-circle scale-90 mr-2"></i>
                Info
            </div>
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
                <div className="
                    absolute right-2 top-2
                    px-3 py-1
                    text-lg cursor-pointer"
                >
                    <i className="fa fa-chevron-down"></i>
                </div>
                <p className="mb-4 text-lg lg:text-xl font-semibold">
                    {itemTypeMapper(type)}
                </p>
                {/* Wrapper for client, year, etc */}
                <div className="
                    flex-1
                    flex flex-col justify-between"
                >
                    <p className="mb-2 text-sm lg:text-md">
                        <span className="font-semibold">Cliente: </span>{client}
                    </p>
                    {year !== null &&
                        <p className="text-sm lg:text-md">
                            <span className="font-semibold">Año: </span>{year}
                        </p>
                    }
                </div>
            </div>
        }
    </div>
    )
}

export default LightboxInfo