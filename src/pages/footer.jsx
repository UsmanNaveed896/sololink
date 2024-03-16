import Img1 from '../assets/SoLoLink 1.png';

const Footer = () => {
    return (
        <div className="bg-[#1E4050] w-screen h-screen p-12 flex">
            <div className='p-12'>
                <div>
                    <img src={Img1} alt='menu' />
                    <div className='pt-5 text-[#ffffff] text-base'>
                        <p>Copyright © 2022.</p><p> All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            <div className="flex p-8">
                <div className='txt text-white'>
                    <p className='mt-4 pl-12 ml-12 font-bold'>Page Menus</p>
                    <p className='pl-12 ml-12'>Home</p>
                    <p className='pl-12 ml-12'>Album</p>
                    <p className='pl-12 ml-12'>Artis</p>
                    <p className='pl-12 ml-12'>Sound</p>
                </div>
                <div className='txt text-white'>
                    <p className='mt-4 pl-8 ml-8 font-bold'>Community</p>
                    <p className='pl-8 ml-8'>For Artist</p>
                    <p className='pl-8 ml-8'>Developer</p>
                    <p className='pl-8 ml-8'>Ads</p>
                    <p className='pl-8 ml-8'>Inverstor</p>
                    <p className='pl-8 ml-8'>Vendor</p>
                </div>
                <div className='txt text-white'>
                    <p className='mt-4 pl-8 ml-8 font-bold'>Term & Condition</p>
                    <p className='pl-8 ml-8'>Privacy Policy</p>
                </div>
                <div className='txt text-white'>
                    <p className='mt-4 pl-8 ml-8 font-bold'>Social Media</p>
                    <p className='pl-8 ml-8'>Twitter</p>
                    <p className='pl-8 ml-8'>Tiktok</p>
                    <p className='pl-8 ml-8'>Facebook</p>
                    <p className='pl-8 ml-8'>Instagram</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
