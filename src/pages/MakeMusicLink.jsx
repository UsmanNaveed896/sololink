import React, { useState } from 'react'
import Img from '../assets/Group7.png'
import Img1 from '../assets/menu.png'
import Img2 from '../assets/SoLoLink 1.png'
import Img4 from '../assets/22.png'
import Img5 from '../assets/44.png'
import "react-multi-carousel/lib/styles.css";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const MakeMusicLink = () => {
  const navigate = useNavigate();
  const [link, setLink] = useState('');
  const [display, setDisplay] = useState()
  const [loading, setLoading] = useState(false)

  const handleInput = (e) => {
    const value = e.target.value
    setLink(value)
  }
  const handleApi = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&q=${link}&key=${process.env.REACT_APP_PUBLIC_YOUTUBE_API_KEY}`)
      setDisplay(response.data)
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
      console.log(error)
    }

  }
  const handleYoutubeSearch = (videoId) => {

    navigate(`https://www.youtube.com/watch?v=${videoId}`, { replace: true })
    console.log(videoId, "id")
  }
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
            <div className='flex justify-center'>
              <div className=''>
                <div><input className='py-2 w-[500px] pl-4 rounded bg-[#07162D] text-white mt-4' placeholder='Make a music link'  onChange={(e)=>handleInput(e)} /></div>
                <div className='flex justify-center'>
                  <button className='py-2 px-5 rounded bg-[#07162D] text-white mt-4' onClick={(e)=>handleApi(e)}> search</button>

                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-12 text-white'>
            {!loading ? 
            <div className='w-[500px] rounded py-12 px-2 bg-[#07162D]'>
              {display?.items?.map((item) => (
                <Link to={`https://www.youtube.com/watch?v=${item?.id?.videoId}`}>
                  <div className='info flex gap-4 items-start' >
                    <div className='full]'>
                      <img className='h-[64] w-[64]' src={item?.snippet?.thumbnails?.high?.url} alt='pic' />
                    </div>
                    <div>
                      <h1 className='text-[25px] font-bold py-2 '>{item?.snippet?.title}</h1>
                      <p className='text-[12px] py-1'>{item?.snippet?.channelTitle}</p>
                      <p className='text-[12px] py-1'>{item?.snippet?.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div> :
            <div role="status">
              <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
}
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
    </>
  )
}

export default MakeMusicLink