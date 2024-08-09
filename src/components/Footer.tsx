import { MapPin } from 'lucide-react'
import vastraa_logo from '../assets/Vastraa_Logo_footer.png'

function Footer() {
    return (
        <div id='contact' className="bg-primary md:px-[150px] p-5 text-[#FBFFFE] lg:h-[400px] lg:flex items-center justify-center">
            <div className='lg:flex lg:gap-12 space-y-8 lg:space-y-0'>
                <div>
                    <img src={vastraa_logo} alt="vastraa_logo" className='lg:w-[300px] w-[100px]' />
                </div>
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
                <div className='flex flex-col space-y-5'>
                    <div className='flex space-x-2 items-center'>
                        {<MapPin />}
                        <h2 className='text-[#FFCC33] font-semibold lg:text-2xl'>Jayanagar</h2>
                    </div>
                    <p>69, 9th Main Rd, Jaya Nagar 1st Block,
                        Jayanagar 3rd Block East, Jayanagar,
                        Bengaluru, Karnataka 560011</p>
                    <p className='font-semibold'>+91-9986178988</p>
                    <p>vastraaevents@gmail.com</p>
                </div>
                <div className='flex flex-col space-y-5'>
                    <div className='flex space-x-2 items-center'>
                        {<MapPin />}
                        <h2 className='text-[#FFCC33] font-semibold lg:text-2xl'>Whitefiled</h2>
                    </div>
                    <p>No A/2, Inner Cir Rd, Whitefield,
                        Dodsworth Layout, Bengaluru,
                        Karnataka 560066</p>
                    <p>+91-9986178988</p>
                    <p>vastraaevents@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer