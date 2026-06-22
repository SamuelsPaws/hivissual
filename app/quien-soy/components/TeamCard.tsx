import Image from "next/image"

interface Props {
    name: string;
    role: string;
    imgSrc: string;
}

const TeamCard = ({ name, role, imgSrc }: Props) => {
  return (
    <div className="w-[80%] lg:w-auto flex flex-col gap-4 lg:gap-8">
        <div className="
            w-full lg:w-75 aspect-square relative
            rounded-4xl overflow-hidden"
        >
            <Image
                src={imgSrc}
                fill
                sizes="100%"
                className="w-full h-full object-cover scale-200"
                alt="Project Manager de Hivissual"
            />
        </div>
        <div className="self-stretch flex flex-col items-center gap-2">
            <span className="text-2xl lg:text-3xl text-brandwhite font-semibold">
                {name}
            </span>
            <span className="text-md lg:text-lg text-gray-200">
                {role}
            </span>
        </div>
    </div>
  )
}

export default TeamCard