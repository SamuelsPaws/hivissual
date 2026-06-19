import React from 'react'

interface Props {
    text: string;
}

const ServiceTag = ({ text }: Props) => {
  return (
    <div className='
        px-8 py-4 relative
        text-lg text-gray-300
        gradient-border rounded-2xl'
    >
        {text}
    </div>
  )
}

export default ServiceTag