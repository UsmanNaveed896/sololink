import React from 'react'
import Img from '../../assets/Group7.png'
import Img1 from '../../assets/menu.png'
import Img2 from '../../assets/SoLoLink 1.png'
import Img3 from '../../assets/Group.png'
import Img4 from '../../assets/22.png'
import Img5 from '../../assets/44.png'
import Img7 from '../../assets/Group15.png'
import Img8 from '../../assets/Rectangle (1).png'
import Img9 from '../../assets/Rectangle.png'
import Img10 from '../../assets/linesart.png'
import Img11 from '../../assets/Clippathgroup.png'
import Img12 from '../../assets/AutoLayoutHorizontal.png'
import Img13 from '../../assets/cover.png'
import Img14 from '../../assets/Vector4.png'
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from '../../components/carouselcard/carouselCard'
const Homepage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
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
        <div className='images relative'>
          <img className='absolute top-[-115px]' src={Img10} alt='abc' />
        </div>
        <div className='flex justify-center gap-32 pt-36'>
          <div className='relative'>
            <img className='absolute top-[84px] left-[84px]' src={Img9} alt='rect' />
            <img src={Img8} alt='rect' />
          </div>
          <div className='relative z-[999]'>
            <h1 className=' text-[50px] font-semibold text-white uppercase'>many top songs that <br></br> can be played from all <br></br> countries</h1>
            <p className='text-[#FFFFFF] font-semibold'>Find your favorite music playlist easily and quickly that <br></br> can be accessed anytime, anywhere, and anymore </p>
            <div className='flex gap-16 text-white mt-16'>
              <div>
                <h1 className='text-5xl font-bold '>500K+</h1>
                <p className='text-xl mt-3'>Famous Singer</p>
              </div>
              <div>
                <h1 className='text-5xl font-bold '>240K+</h1>
                <p className='text-xl mt-3'>Playlist Song</p>
              </div>
            </div>
          </div>

        </div>
        <div className='bg-cover relative my-[-90px]' style={{ backgroundImage: `url(${Img11})`, }}>
          <div className='h-[500px]'></div>
          <div className='flex justify-center '>
            <div className='rounded-xl  min-w-[600px] px-12 py-4 pb-12' style={{ background: gradient }}>
              <h1 className='text-center text-white mt-12'>Make unlimited for free.<span className='font-bold'>No login needed</span></h1>
              <div className='flex justify-center'>
                <button className='py-2 px-5 rounded bg-[#07162D] text-white mt-4'>Make a music link</button>
              </div>
            </div>
          </div>
          <div className='img flex justify-end mt-[28rem] relative'>
            <div> <img src={Img12} alt='abc' /></div>
            <img className='absolute top-[-354px] left-[36%]' src={Img13} alt='mobile' />
            <div className='h-[500px]'></div>
          </div>
        </div>
        <div className='bg-cover h-screen border-t border-b ' style={{ backgroundImage: `url(${Img14})`, }}>
          <div className='px-12 mt-12'>
            <MultiCarousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            </MultiCarousel>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Homepage