import React from 'react'
import Img1 from '../../assets/GroupA.png'
import Img2 from '../../assets/Group15.png'
import Img3 from '../../assets/Group59.png'
import Img4 from '../../assets/Clippathgroup1.png'
import Img5 from '../../assets/Subscribe.png'
import Img6 from '../../assets/AutoLayoutHorizontal.png'
import Img7 from '../../assets/Vector6.png'
import Img8 from '../../assets/ana.png'
import Img9 from '../../assets/Group112.png'




const Homepagesec2 = () => {
    const gradient = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(18,109,151,1) 0%, rgba(180,103,210,1) 100%)'

    return (
        <>
            <div className='bg-cover relative' style={{ backgroundImage: `url(${Img2})`, }}>
                <div className='bg-cover relative' style={{ backgroundImage: `url(${Img1})`, }}>

                    <div className='pt-32'>
                        <h1 className=' text-[50px] font-semibold text-center text-white uppercase'>Link to all platforms<br></br>
                            Get More streams </h1>
                        <p className='text-center text-[#CDC9C9] mt-6 pb-3 text-[20px]'>With Countless Music platforms out there, It's no longer enough to share just a Spotify link.</p>
                        <p className='text-center text-[#CDC9C9] text-[20px]'>Sharing a solo link link means everyone can use their favorite music app and you Get more streams</p>
                    </div>
                    <div className='flex justify-center mt-12 pb-12'>
                        <img className='h-[1000px]' src={Img3} alt='abc' />
                    </div>

                </div>
            </div>

            <div className='bg-cover relative ' style={{ backgroundImage: `url(${Img2})`, }}>
                <div className='bg-cover ' style={{ backgroundImage: `url(${Img4})`, }}>
                    <div className='flex justify-center pt-16'>
                        <div className='rounded-xl  min-w-[600px] px-12 py-4 pb-12' style={{ background: gradient }}>
                            <h1 className='text-center text-white mt-12'>Make song, album or artist pages in one clink</h1>
                            <div className='flex justify-center'>
                                <button className='py-2 px-5 rounded bg-[#07162D] text-white mt-4'>Make a page</button>
                            </div>
                        </div>
                    </div>
                    <div className='pt-32'>
                        <h1 className=' text-[50px] font-semibold text-center text-white uppercase'>Smart pages get results  </h1>
                        <p className='text-center text-[#CDC9C9] mt-6 pb-3 text-[20px]'>Each sololink  page is packed with intelligent <br></br> optimization working hard to get you as many streams as possible.</p>
                    </div>
                    <div className='flex justify-center mt-12'>
                        <img src={Img5} alt='abv' />
                    </div>
                    <div className='flex justify-end '>
                        <img className='w-[60%] mt-[-6rem]' src={Img6} alt='abv' />
                    </div>
                    <div className='flex justify-center pt-16'>
                        <div className='rounded-xl  min-w-[600px] px-12 py-4 pb-12' style={{ background: gradient }}>
                            <h1 className='text-center text-white mt-12'>Join the 1000s of artists who trust on sololink</h1>
                            <div className='flex justify-center'>
                                <button className='py-2 px-5 rounded bg-[#07162D] text-white mt-4'>Make a page</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='mt-[-52px] w-full' src={Img7} alt='test' />
                <div className='pt-12 mt-[-15rem]'>
                    <h1 className=' text-[50px] font-semibold text-center text-white uppercase'>Smart pages get results  </h1>
                    <p className='text-center text-[#CDC9C9] mt-6 pb-3 text-[20px]'>Each sololink  page is packed with intelligent <br></br> optimization working hard to get you as many streams as possible.</p>
                </div>
                <div className='flex justify-center mt-12'>
                    <img className=' mt-6' src={Img8} alt='test' />

                </div>
            </div>
            <div className='bg-cover  relative ' style={{ backgroundImage: `url(${Img2})`, }}>
                <div className='bg-cover h-screen ' style={{ backgroundImage: `url(${Img9})`, }}>
                    <div className='pt-[20rem]'>
                        <h1 className=' text-[50px] font-semibold text-center text-white uppercase'>Smart pages get results  </h1>
                        <p className='text-center text-[#CDC9C9] mt-6 pb-3 text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className='flex justify-center mt-12'>
                        <button className='py-2 px-16 rounded bg-[#07162D] text-white mt-4'>Learn About Pro</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepagesec2