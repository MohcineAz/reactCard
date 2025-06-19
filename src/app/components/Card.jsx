import React from 'react'
import Image from 'next/image'
import img from '../assets/image.png'

function Card() {
  return (
    <div className='max-w-sm rounded-2xl shadow-md bg-white p-4 overflow-hidden'>
      <div className='img relative'>
        <Image className='rounded-2xl' src={img} alt="Illustration" width={300} height={200} />
      </div>
    </div>
  )
}

export default Card
