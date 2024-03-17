import React from 'react'
import Img from '../assets/Group7.png'
import Img1 from '../assets/menu.png'
import Img2 from '../assets/SoLoLink 1.png'
import Img3 from '../assets/Group.png'
import Img4 from '../assets/22.png'
import Img5 from '../assets/44.png'
import Img7 from '../assets/Group15.png'
import Img8 from '../assets/Rectangle (1).png'
import Img9 from '../assets/Rectangle.png'
import Img10 from '../assets/linesart.png'
import Img11 from '../assets/Clippathgroup.png'
import Img12 from '../assets/AutoLayoutHorizontal.png'
import Img13 from '../assets/cover.png'
import Img14 from '../assets/Vector4.png'
import "react-multi-carousel/lib/styles.css";
const MakeMusicLink = () => {
  
  const gradient = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(18,109,151,1) 0%, rgba(180,103,210,1) 100%)'
  return (
    <>
      <div className='home-page font-roboto bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Img})`, }}>
        <div className='px-12 py-3 '>
          <div className='flex justify-between items-center'>
            <div>
              <img src={Img1} alt='menu' />
            </div>
            <div>
              <img src={Img2} alt='menu' />
            </div>
            <div>
              <i className='fa fa-plus text-[16px] text-white'></i>
            </div>
          </div>
          <div className='abc text-white mt-24'>
            <div className='flex gap-12 items-center '>
              <h1 className='text-[70px]'>EXPRESS</h1>
              <div className='relative w-full'>
                <img className='' src={Img3} alt='menu' />
                <h1 className='absolute w-full mt-1 ml-12 font-bold' >in music</h1>
              </div>
            </div>
            <h1 className='text-[70px] ml-16'>YOURSELF</h1>
          </div>

        </div>
        <div className='beat image mt-16'>
          <img src={Img4} alt='beat' />
        </div>
        <div className='px-12 py-3 '>
          <div className='flex justify-end'>
            <img src={Img5} alt='music' />
          </div>
        </div>
      </div>
      <div className=' bg-cover' style={{ backgroundImage: `url(${Img7})`, }}>
       <h1 className='text-[#FFFFFF] text-center pt-12 pb-12'>404 Page not found</h1>
      
      </div>
    </>
  )
}

export default MakeMusicLink