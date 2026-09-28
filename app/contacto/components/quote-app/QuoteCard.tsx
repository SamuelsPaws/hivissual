'use client'
import { useState } from "react"
import SelectBtn from "./SelectBtn"

type Screen = 'main' | 'photo' | 'video' | 'both' | 'socialVideo'

const QuoteCard = () => {
    const [screen, setScreen] = useState<Screen>('main')

    return (
    <div className="
        w-full h-80 relative
        lg:w-100 lg:h-80
        py-4
        flex flex-col
        bg-brandblack
        gradient-border rounded-2xl"
    >
        <span className="text-xl text-brandwhite text-center font-semibold">
            Recibe tu cotización
        </span>
        <div className="
            flex-1
            flex flex-col justify-center items-center gap-4"
        >
            {screen === 'main' && <>
                <SelectBtn
                    text="Fotografía"
                    onClick={() => setScreen('photo')}
                />
                <SelectBtn
                    text="Video"
                    onClick={() => setScreen('video')}
                />
                <SelectBtn
                    text="Ambos"
                    onClick={() => setScreen('both')}
                />
            </>}
            {screen === 'video' && <>
                <SelectBtn
                    text="Video Redes Sociales"
                    onClick={() => setScreen('socialVideo')}
                />
                <SelectBtn
                    text="Video Dron"
                    onClick={() => setScreen('video')}
                />
            </>}
            {screen === 'socialVideo' && <>
                <SelectBtn
                    text="Menos de 30 segundos"
                    onClick={() => setScreen('video')}
                />
                <SelectBtn
                    text="30 segundos - 2 minutos"
                    onClick={() => setScreen('video')}
                />
                <SelectBtn
                    text="Más de 2 minutos"
                    onClick={() => setScreen('video')}
                />
            </>}
        </div>
    </div>
  )
}

export default QuoteCard