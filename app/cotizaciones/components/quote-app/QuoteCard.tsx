'use client'
import { useState } from "react"
import SelectBtn from "./SelectBtn"

type Screen = 'main' | 'photoFirst' | 'videoFirst'

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
                    onClick={() => setScreen('photoFirst')}
                />
                <SelectBtn
                    text="Video"
                    onClick={() => setScreen('videoFirst')}
                />
                <SelectBtn
                    text="Ambos"
                    onClick={() => setScreen('photoFirst')}
                />
            </>}
            {screen === 'videoFirst' && <>
                <SelectBtn
                    text="Video Redes Sociales"
                    onClick={() => setScreen('photoFirst')}
                />
                <SelectBtn
                    text="Video Dron"
                    onClick={() => setScreen('videoFirst')}
                />
            </>}
        </div>
    </div>
  )
}

export default QuoteCard