import React, { use } from 'react'
import Image from 'next/image'
import img from '../assets/image.png'
import check from '../assets/check.png'
import user from '../assets/user.png'
import plus from '../assets/plus.png'

function Card() {
  return (
    <div className='max-w-sm rounded-2xl shadow-md bg-white p-4 overflow-hidden'>
      <div className='img relative'>
        <Image className='rounded-2xl' src={img} alt="Image" width={300} height={200} />
        <div className="absolute bottom-0 left-0 right-0 h-35 bg-[#EAEFEF] blur-md z-0 rounded-full" />
        <div className="text absolute bottom-2">
          <div className="name text-black p-4 flex">
            <h1 className='font-bold text-2xl pe-2'>Mohcine AAZZOU</h1>
            <Image src={check} alt="Illustration" width={30} height={20}/>
          </div>
          <div className="desc px-4">
            <p className='text-black'>Développeur front-end passionné par l’UI moderne</p>
          </div>
          <div className="infos flex px-4 pt-3 justify-between">
            <div className="account flex items-center">
              <Image src={user} alt='icon' height={10} width={15} className='me-1 w-2.5 h-2.5'/>
              <h3 className='text-black'>350</h3>
            </div>
            <div className="btn">
              <button className='bg-white rounded-3xl p-3 text-black flex items-center cursor-pointer shadow-2xl'>Follow 
                <Image className=' ms-1.5 w-2.5 h-2.5' src={plus} height={10} width={15} alt='plus' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
