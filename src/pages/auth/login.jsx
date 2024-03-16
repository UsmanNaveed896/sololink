import Img from '../../assets/bg1.png'
import Img1 from '../../assets/SoLoLink 1.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/forgetpassword');
    };
    const handleSignup = () => {
        navigate('/signup');
    };
    return (
        <>
            <div className=' bg-cover' style={{ backgroundImage: `url(${Img})`, }}>
                <div className='p-8'>
                    <img src={Img1} alt='menu' />
                    <h1 className="text-[#ffffff] pt-6 font-open-sans text-2xl font-semibold leading-12 tracking-wide text-left">
                        Hi, Welcome Back!
                    </h1>
                    <h5 className="text-[#ffffff] ">Enjoy the best music collection of your choice, login now</h5>
                    <h5 className="text-[#ffffff] pt-10 pb-2">Email Address</h5>
                    <input
                        className={`pl-4 bg-transparent pr-16 py-2 text-white placeholder-[#FFFFFF54] ${window.innerWidth < 768 ? 'w-full' : 'w-2/6'}`}
                        style={{
                            borderImageSource: 'linear-gradient(314.74deg, #3A46D9 0%, #A141AB 41.88%, #2E3699 63.58%, #B12EB5 96.88%)',
                            borderImageSlice: '1',
                            borderImageWidth: '1px',
                            borderRadius: '0.5rem', // Adjust the value as needed
                        }}
                        placeholder='willie.jennings-example.com'
                    />




                    <h5 className="text-[#ffffff] pt-6 pb-2">Password</h5>
                    <input
                        className=' pl-4 bg-transparent pr-16 py-2 text-white placeholder-[#FFFFFF54] w-2/6'
                        style={{
                            borderImageSource: 'linear-gradient(314.74deg, #3A46D9 0%, #A141AB 41.88%, #2E3699 63.58%, #B12EB5 96.88%)',
                            borderImageSlice: '1',
                            borderImageWidth: '1px',
                            borderRadius: '0.5rem' // Adjust the value as needed
                        }}
                        placeholder='8+ characters required'
                    />
                    <div className="flex items-center bg-transparent pt-2">
                        <input type="checkbox" className="mr-2 pl-4" />
                        <h5 className="text-[#ffffff] pb-2 pr-12 pl-2 text-xs">Keep me Log In</h5>
                        <button className=" text-[#126D97] pb-2 pl-14 ml-14 text-xs" onClick={handleClick}>Forget Password?</button>

                    </div>
                    <div className="flex items-center bg-transparent">
                        <input type="checkbox" className="mr-2 pl-4" />
                        <h5 className="text-[#ffffff] pb-2 pl-2  text-xs">I accept the&nbsp;</h5>
                        <h5 className=" text-[#126D97] pb-2 text-xs">Terms of use&nbsp;</h5>
                        <h5 className="text-[#ffffff] pb-2 text-xs"> and&nbsp;</h5>
                        <h5 className=" text-[#126D97] pb-2  text-xs">Subscription</h5>
                    </div>



                    <div className=' pt-8'>
                        <button className="rounded-xl pt-2 pb-2 w-2/6 border-2 border-solid border-opacity-100 border-gray-800 rounded-8 bg-gradient-to-r from-blue-600 to-gray-600 text-white font-semibold">
                            Login
                        </button></div>
                    <div className="pl-12">
                        <h5 className="pl-12 text-white pt-2 pb-2 w-2/6 text-xs">
                            _____Or, login with your email_____
                        </h5>
                    </div>
                    <div className=' pt-2'>
                        <button style={{
                            borderImageSource: 'linear-gradient(314.74deg, #3A46D9 0%, #A141AB 41.88%, #2E3699 63.58%, #B12EB5 96.88%)',
                            borderImageSlice: '1',
                            borderImageWidth: '1px',
                            borderRadius: '0.5rem' // Adjust the value as needed
                        }} className="rounded-xl pt-2 pb-2 w-2/6 bg-transparent text-white font-semibold">
                            Login with Google
                        </button></div>
                    <div className="pl-12 pb-2 text-xs w-2/6 flex items-center pt-4">
                        <h5 className="pl-12 text-white">
                            Don’t have an account yet?&nbsp;
                        </h5> <button className="text-[#126D97]" onClick={handleSignup}>
                            Create a new account&nbsp;
                        </button>
                    </div>
                </div>





            </div>


        </>
    )
}

export default Login