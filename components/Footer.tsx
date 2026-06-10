import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
  <footer className="
    h-footer-height w-full
    absolute bottom-0 left-0
    px-4 pb-4
    bg-transparent"
  >
    {/* Container with bg */}
    <div className="
      w-full h-full
      p-8
      flex
      bg-linear-to-b from-gray-300 to-gray-400
      rounded-2xl"
    >
      {/* Left part with logo */}
      <div className="
        w-[40%] h-full
        flex flex-col items-center justify-center"
      >
        {/* Image container */}
        <div className="w-40 h-20 relative">
          <Image
            src="/assets/logo.png"
            fill
            sizes="100%"
            className="w-full object-contain"
            alt="Logo de Hivissual"
          />
        </div>
        <span className="
          pt-8 pb-2
          text-2xl text-black font-semibold tracking-wider"
        >
          HIVISSUAL
        </span>
        <p className="w-[75%] text-md text-brandblack text-center">
          Fotografía, video y contenido visual para marcas que quieren destacar.
        </p>
      </div>
      {/* Right part with columns */}
      <div className="
        flex-1
        flex items-center justify-evenly gap-4"
      >
        {/* Navigation */}
        <ul className="
          flex flex-col items-end gap-4
          text-xl text-brandblack tracking-wider"
        >
          <li>
            <Link
              href="/"
              className="hover:underline"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/portafolio"
              className="hover:underline"
            >
              Portafolio
            </Link>
          </li>
          <li>
            <Link
              href="/quien-soy"
              className="hover:underline"
            >
              Quién Soy
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="hover:underline"
            >
              Contacto
            </Link>
          </li>
        </ul>
        {/* Whatsapp and e-mail */}
        <div className="flex flex-col items-end gap-4">
          <span className="text-xl text-black font-semibold">
            WhatsApp
          </span>
          <a
            href="/"
            className="text-md text-brandblack underline"
          >
            +593999999
          </a>
          <span className="mt-4 text-xl text-black font-semibold">
            E-mail
          </span>
          <a
            href="/"
            className="text-md text-brandblack underline"
          >
            hivissual@example.com
          </a>
        </div>
        {/* Socials */}
        <div className="flex flex-col items-end gap-4">
          <span className="text-xl text-black font-semibold">
            Redes Sociales
          </span>
          <a
            href="/"
            className="text-md text-brandblack underline"
          >
            <i className="fa fa-instagram mr-2" aria-hidden="true"></i>
            hivissual
          </a>
          <a
            href="/"
            className="text-md text-brandblack underline"
          >
            <i className="fa fa-facebook-square mr-2" aria-hidden="true"></i>
            Hivissual
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer