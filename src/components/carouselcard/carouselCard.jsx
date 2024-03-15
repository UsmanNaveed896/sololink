import React from 'react'
import Img15 from '../../assets/Profile.png'

const carouselCard = () => {
  return (
    <div className='cards max-w-[300px] rounded-xl border py-6 px-5 mt-48 bg-[#18272E]'>
    <div className='flex gap-3 items-center pb-2'>
      <div> <img src={Img15} alt='abc' /></div>
      <div><p className='font-bold text-white'>Ritviz</p>
        <p className='text-white text-xs pb-1' >2.2M followers</p>
      </div>
    </div>
    <p className='text-sm text-[#CDC9C9]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. "Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
  )
}

export default carouselCard