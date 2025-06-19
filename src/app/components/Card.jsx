import React from 'react'
import Image from 'next/image'
import img from '../assets/image.png'
import check from '../assets/check.png'

function Card() {
  return (
    <div className='max-w-sm rounded-2xl shadow-md bg-white p-4 overflow-hidden'>
      <div className='img relative'>
        <Image className='rounded-2xl' src={img} alt="Image" width={300} height={200} />
        <div className="absolute bottom-0 left-0 right-0 h-30 bg-white blur-md z-0 rounded-full" />
        <div className="text absolute bottom-2">
          <div className="name text-black p-4 flex">
            <h1 className='font-bold text-2xl pe-2'>Mohcine AAZZOU</h1>
            <Image src={check} alt="Illustration" width={30} height={20}/>
          </div>
          <div className="desc px-4">
            <p className='text-black'>Développeur front-end passionné par l’UI moderne</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
