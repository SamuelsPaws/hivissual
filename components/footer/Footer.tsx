import Image from "next/image"
import Link from "next/link"
import CustomIcon from "../CustomIcon"
import navLinks from "@/data/nav"
import NavLinkFoot from "./subcomponents/NavLinkFoot"

const Footer = () => {
	return (
	<footer className="
		h-footer-height-mob lg:h-footer-height w-full
		absolute bottom-0 left-0
		px-4 pb-4
		bg-transparent"
	>
		{/* Container with bg */}
		<div className="
			w-full h-full z-10
			px-8 py-12
			md:px-8 md:py-8
			flex flex-col lg:flex-row gap-8 lg:gap-0
			bg-linear-to-b from-gray-100 to-gray-300
			rounded-2xl"
		>
			{/* Left part with logo and text */}
			<div className="
				w-full h-[30%]
				lg:w-[40%] lg:h-full
				flex flex-col items-center justify-center"
			>
				{/* Image container */}
				<div className="
					w-20 h-10
					lg:w-40 lg:h-20 relative"
				>
					<Image
						src="/assets/logo-black.svg"
						fill
						sizes="100%"
						className="w-full object-contain"
						alt="Logo de Hivissual"
					/>
				</div>
				<span className="
					mt-8 mb-2
					text-xl lg:text-3xl text-black font-semibold tracking-wider"
				>
					HIVISSUAL
				</span>
				<p className="
					w-[90%] text-sm
					lg:w-[75%] lg:text-md
					text-brandblack text-center"
				>
					Fotografía, video y contenido visual para marcas que quieren destacar.
				</p>
			</div>
			{/* Right part with columns */}
			<div className="
				flex-1
				flex flex-col justify-between gap-8
				lg:flex-row lg:items-center lg:justify-evenly lg:gap-4"
			>
				{/* Navigation */}
				<ul className="
					flex flex-col
					items-start gap-2 text-lg
					lg:items-end lg:gap-3 lg:text-xl
					text-brandblack tracking-wider"
				>
					{navLinks.map((el, index) => (
						<NavLinkFoot
							key={index}
							item={el}
						/>
					))}
				</ul>
			{/* Whatsapp and e-mail */}
			<div className="flex flex-col items-end gap-2 lg:gap-4">
			<span className="text-lg lg:text-xl text-black font-semibold">
				WhatsApp
			</span>
			<a
				href="tel:+593983523721"
				className="text-md lg:text-md text-brandblack underline"
			>
				098 352 3721
			</a>
			<span className="mt-4 text-lg lg:text-xl text-black font-semibold">
				E-mail
			</span>
			<a
				href="mailto:martin.espin7@gmail.com"
				className="text-md lg:text-md text-brandblack underline"
			>
				martin.espin7@gmail.com
			</a>
			</div>
			{/* Socials */}
			<div className="flex flex-col items-end gap-2 lg:gap-4">
			<span className="text-lg lg:text-xl text-black font-semibold">
				Redes Sociales
			</span>
			<a
				href="https://www.instagram.com/hivissual/"
				className="text-md lg:text-md text-brandblack underline"
			>
				<i className="fa fa-instagram mr-2" aria-hidden="true"></i>
				Instagram
			</a>
			<a
				href="https://www.tiktok.com/@hivissual"
				className="text-md lg:text-md text-brandblack underline"
			>
				<CustomIcon iconId="tiktok" className="mr-2" />
				TikTok
			</a>
			{/* <a
				href="/"
				className="text-md lg:text-md text-brandblack underline"
			>
				<i className="fa fa-facebook-square mr-2" aria-hidden="true"></i>
				Hivissual
			</a> */}
			</div>
			</div>
		</div>
  </footer>
  )
}

export default Footer