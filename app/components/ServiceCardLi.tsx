interface Props {
    children: React.ReactNode;
}

const ServiceCardLi = ({ children }: Props) => {
  return (
    <li className="text-brandwhite/90">
        <span className="text-brandgold-600">
            <i className="fa fa-circle mr-2 scale-30" aria-hidden="true"></i>
        </span>
        {children}
    </li>
  )
}

export default ServiceCardLi