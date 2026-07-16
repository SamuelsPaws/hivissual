import Image from "next/image"

interface Props {
    message: string;
    author: string;
    imageUrl: string;
}

const TestimonialCard = ({ message, author, imageUrl }: Props) => {
  return (
    <div className="
        flex-[0_0_calc((100%-128px)/3)]
        flex flex-col items-center gap-8"
    >
        <p className="
            text-lg text-center text-gray-200
            before:content-['“'] before:text-2xl before:font-['Source_Serif_4']
            after:content-['”'] after:text-2xl after:font-['Source_Serif_4']"
        >
            {message}
        </p>
        {/* Lower div with name and photo */}
        <div className="
            w-full px-8
            flex items-center gap-8"
        >
            <div className="
                w-16 aspect-square relative
                rounded-full overflow-hidden"
            >
                <Image
                    src={imageUrl}
                    fill
                    sizes="100%"
                    className="w-full h-full object-cover"
                    alt="Stock"
                />
            </div>
            <div className="flex-1 text-md text-gray-200 text-left">
                — {author}
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard