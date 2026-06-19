import clsx from "clsx";

interface Props {
    bgColor: string;
}

const FooterWrapper = ({ bgColor }: Props) => {
  return (
    <div className={clsx("w-full h-footer-height-mob lg:h-footer-height", bgColor)}></div>
  )
}

export default FooterWrapper