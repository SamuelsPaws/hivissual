interface Props {
	text: string;
}

const ServiceCardLi = ({ text }: Props) => {
  return (
    <li className="text-brandwhite/90">
        <span className="text-gray-300">
            <i className="fa fa-circle mr-2 scale-30" aria-hidden="true"></i>
        </span>
        {text}
    </li>
  )
}

export default ServiceCardLi