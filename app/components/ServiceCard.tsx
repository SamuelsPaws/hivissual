interface Props {
    title: string;
    children: React.ReactNode;
}

const ServiceCard = ({ title, children }: Props) => {
  return (
    <div className="
        w-full lg:w-110 relative
        p-8 lg:p-12
        rounded-2xl lg:rounded-4xl
        gradient-border"
    >
        <h3 className="
            mb-8 lg:mb-8
            text-brandwhite text-xl lg:text-2xl font-semibold"
        >
            {title}
        </h3>
        {children}
    </div>
  )
}

export default ServiceCard