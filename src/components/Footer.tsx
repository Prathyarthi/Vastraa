import { MapPin } from 'lucide-react'
import vastraaLogo from "../assets/footer_logo.png"

function Footer() {
    return (
        <div id='contact' className="bg-primary md:px-[150px] pt-5 px-[16px] pb-10 text-[#FBFFFE] lg:h-[400px] lg:flex items-center justify-center">
            <div className='lg:flex lg:gap-12 space-y-8 lg:space-y-0'>
                <div className='hidden md:block'>
                    <img src={vastraaLogo} alt="vastraa_logo" className='lg:w-[300px] w-[100px]' />
                </div>
                <div className='md:flex space-x-20 hidden'>
                    <div className='space-y-5'>
                        <h2 className='text-[#FFCC33] font-semibold lg:text-2xl'>Links</h2>
                        <p>Blogs</p>
                        <p>Mail</p>
                    </div>
                    <div className='space-y-5'>
                        <h2 className='text-[#FFCC33] font-semibold lg:text-2xl'>Information</h2>
                        <p>Costumes</p>
                        <p>Events</p>
                        <p>Why Vastraa?</p>
                        <p>Team</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-5'>
                    <div className='flex space-x-2 items-center'>
                        {<MapPin />}
                        <h2 className='text-[#FFCC33] md:font-semibold font-bold lg:text-2xl'>Jayanagar</h2>
                    </div>
                    <p className='text-[14px]'>69, 9th Main Rd, Jaya Nagar 1st Block,
                        Jayanagar 3rd Block East, Jayanagar,
                        Bengaluru, Karnataka 560011</p>
                    <p className='font-bold flex flex-col text-[14px]'>+91-9986178988</p>
                    <a href='' className='cursor-pointer'>vastraaevents@gmail.com
                    </a>
                </div>
                <div className='flex flex-col space-y-5'>
                    <div className='flex space-x-2 items-center'>
                        {<MapPin />}
                        <h2 className='text-[#FFCC33] md:font-semibold font-bold lg:text-2xl'>Whitefiled</h2>
                    </div>
                    <p className='text-[14px]'>No A/2, Inner Cir Rd, Whitefield,
                        Dodsworth Layout, Bengaluru,
                        Karnataka 560066</p>
                    <p className='flex flex-col font-bold text-[14px]'>+91-9986178988</p>
                    <a href='' className='cursor-pointer'>vastraaevents@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer