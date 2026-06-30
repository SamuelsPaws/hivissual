'use client'

interface Props {
    onClick: () => void;
    isLoading: boolean;
}

const MoreBtn = ({ onClick, isLoading }: Props) => {

  if (isLoading) {
    return (
      <div className="
        flex w-fit mx-auto
        items-center gap-4
        mt-8 lg:mt-16 py-4
        text-lg text-brandwhite font-semibold"
      >
        <span>Cargando</span>
        <i className="fa fa-clock-o" aria-hidden="true"></i>
      </div>
    )
  }

  return (
    <button
        onClick={onClick}
        className="
        block mx-auto
        mt-8 lg:mt-16 px-8 py-4
        bg-brandwhite
        text-lg text-black font-semibold
        rounded-full"
    >
        Cargar Más
    </button>
  )
}

export default MoreBtn