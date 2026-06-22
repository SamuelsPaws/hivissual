interface Props {
    title: string;
    text: string;
}

const TrustCard = ({ title, text }: Props) => {
  return (
    <div className="
        w-100 relative
        p-8 lg:p-8
        bg-linear-to-b from-brandwhite to-gray-200 rounded-2xl lg:rounded-4xl"
    >
        <h3 className="
            mb-8 lg:mb-8
            text-black text-xl lg:text-2xl font-semibold"
        >
            {title}
        </h3>
        <p className="text-md text-black">
            {text}
        </p>
    </div>
  )
}

export default TrustCard