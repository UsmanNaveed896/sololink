import React from 'react'
import Img from '../../assets/Group7.png'
import Img1 from '../../assets/menu.png'
import Img2 from '../../assets/SoLoLink 1.png'
import Img3 from '../../assets/Group.png'
import Img4 from '../../assets/22.png'
import Img5 from '../../assets/44.png'
import Img7 from '../../assets/Group15.png'
const Homepage = () => {
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
      <div className='h-screen bg-cover' style={{ backgroundImage: `url(${Img7})`, }}>
        <div className='relative'>
        <h1 className='text-center text-[50px] font-bold text-white absolute left-[30%] top-[-40px]'>Premium music links to <br></br>
          help you grow</h1>
        </div>
        <div className='h-[120px]'></div>
    <div className='relative'>
    <p className='text-center text-[#FFFFFF] font-semibold'>take control of your pages and unlock premium features <br></br> when you claim your artist profile </p>
    </div>
          
      </div>
    </>
  )
}

export default Homepage