import Img1 from '../assets/SoLoLink 1.png';

const Footer = () => {
    return (
        <div className="bg-[#1E4050] ">
            <div className='grid grid-cols-2 py-16'>
                <div className='column1 flex justify-center'>
                   <div><img src={Img1} alt='menu' />
                    <div className='pt-5 text-[#ffffff] text-base'>
                        <p>Copyright © 2022.</p><p> All Rights Reserved.</p>
                    </div>
                    </div> 
                </div>
            
            <div className="flex  column2 jutify-center">
                <div className='txt text-white'>
                    <p className='mt-4 pl-12 ml-12 py-2 font-bold'>Page Menus</p>
                    <p className='pl-12 ml-12 py-2'>Home</p>
                    <p className='pl-12 ml-12 py-2'>Album</p>
                    <p className='pl-12 ml-12 py-2'>Artis</p>
                    <p className='pl-12 ml-12 py-2'>Sound</p>
                </div>
                <div className='txt text-white'>
                    <p className='mt-4 pl-8 ml-8 py-2 font-bold'>Community</p>
                    <p className='pl-8 ml-8 py-2'>For Artist</p>
                    <p className='pl-8 ml-8 py-2'>Developer</p>
                    <p className='pl-8 ml-8 py-2'>Ads</p>
                    <p className='pl-8 ml-8 py-2'>Inverstor</p>
                    <p className='pl-8 ml-8 py-2'>Vendor</p>
                </div>
                <div className='txt text-white'>
                    <p className='mt-4 pl-8 ml-8 py-2 font-bold'>Term & Condition</p>
                    <p className='pl-8 ml-8 py-2'>Privacy Policy</p>
                </div>
                <div className='txt text-white'>
                    <p className='mt-4 pl-8 ml-8 py-2 font-bold'>Social Media</p>
                    <p className='pl-8 ml-8 py-2'>Twitter</p>
                    <p className='pl-8 ml-8 py-2'>Tiktok</p>
                    <p className='pl-8 ml-8 py-2'>Facebook</p>
                    <p className='pl-8 ml-8 py-2'>Instagram</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;
