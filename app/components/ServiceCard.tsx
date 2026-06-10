interface Props {
    title: string;
    children: React.ReactNode;
}

const ServiceCard = ({ title, children }: Props) => {
  return (
    <div className="
        w-110 relative
        p-12
        rounded-4xl
        gradient-border"
    >
        <h3 className="
        mb-12
        text-brandwhite text-3xl font-semibold"
        >
            {title}
        </h3>
        {children}
    </div>
  )
}

export default ServiceCard