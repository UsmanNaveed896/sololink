import Img from '../../assets/bg1.png'


const ForgetPassword = () => {
    return (
        <>
            <div className='h-screen bg-cover' style={{ backgroundImage: `url(${Img})`, }}>

                <div className="flex flex-col justify-center h-screen">
                    <h1 className="text-[#ffffff] ml-8 font-open-sans text-2xl font-semibold leading-12 tracking-wide text-left">
                        Reset Password!
                    </h1>

                    <h5 className="text-[#ffffff] ml-8 mt-2">Enter the username and email that you have registered in the</h5>
                    <h5 className="text-[#ffffff] ml-8 ">Sololinnk. We will send an email containing your username and a link</h5>
                    <h5 className="text-[#ffffff] ml-8 ">to reset your password.</h5>

                    <h5 className="text-[#ffffff] ml-8 pt-10 pb-2">Username</h5>
                    <input
                        className='rounded-xl pl-4 bg-transparent border border-white ml-8 pr-16 py-2 text-white placeholder-white w-2/6'
                        placeholder='willie.jennings-example'
                    />
                    <h5 className="text-[#ffffff] ml-8 pt-2 pb-2">Email</h5>
                     <input
                        className='rounded-xl pl-4 bg-transparent border border-white ml-8 pr-16 py-2 text-white placeholder-white w-2/6'
                        placeholder='willie.jennings-example.com'
                    />
                    <div className='ml-8 pt-10'>
                        <button className="rounded-xl pt-2 pb-2 w-2/6 border-2 border-solid border-opacity-100 border-gray-800 rounded-8 bg-gradient-to-r from-blue-600 to-gray-600 text-white font-semibold">
                            Send
                        </button></div>

                </div>




            </div>


        </>
    )
}

export default ForgetPassword