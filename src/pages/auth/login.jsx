import Img from '../../assets/bg1.png'
import Img1 from '../../assets/SoLoLink 1.png'

const Login = () => {
    return (
        <>
            <div className='h-screen bg-cover' style={{ backgroundImage: `url(${Img})`, }}>
                <div className='p-8'>
                    <img src={Img1} alt='menu' />
                    <h1 className="text-[#ffffff] pt-6 font-open-sans text-2xl font-semibold leading-12 tracking-wide text-left">
                        Hi, Welcome Back!
                    </h1>
                    <h5 className="text-[#ffffff] ">Enjoy the best music collection of your choice, login now</h5>
                    <h5 className="text-[#ffffff] pt-10 pb-2">Email Address</h5>
                    <input
                        className='rounded-xl pl-4 bg-transparent border border-white pr-16 py-2 text-white placeholder-white w-2/6'
                        placeholder='willie.jennings-example.com'
                    />
                    <h5 className="text-[#ffffff] pt-6 pb-2">Password</h5>
                    <input
                        className='rounded-xl pl-4 bg-transparent border border-white pr-16 py-2 text-white placeholder-white w-2/6'
                        placeholder='8+ characters required'
                    />

                    <div className=' pt-10'>
                        <button className="rounded-xl pt-2 pb-2 w-2/6 border-2 border-solid border-opacity-100 border-gray-800 rounded-8 bg-gradient-to-r from-blue-600 to-gray-600 text-white font-semibold">
                            Login
                        </button></div>
                    {/* <div className="flex justify-center">
  <h5 className="text-white pt-2 pb-2 w-2/6 text-center">
    _____Or, login with your email_____
  </h5>
</div> */}

                </div>





            </div>


        </>
    )
}

export default Login