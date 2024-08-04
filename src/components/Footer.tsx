import { MapPin } from 'lucide-react'
import vastraa_logo from '../assets/Vastraa_logo.svg'

function Footer() {
    return (
        <div className="bg-primary lg:p-20 p-5 text-[#FBFFFE]">
            <div className='lg:grid lg:grid-cols-5 space-y-5 lg:space-y-0'>
                <div>
                    <img src={vastraa_logo} alt="vastraa_logo" className='w-28' />
                </div>
                <div className='space-y-5 col-span-'>
                    <h2 className='text-[#DF37AE] font-semibold text-2xl'>Links</h2>
                    <p>Blogs</p>
                    <p>Mail</p>
                </div>
                <div className='space-y-5'>
                    <h2 className='text-[#DF37AE] font-semibold text-2xl'>Information</h2>
                    <p>Costumes</p>
                    <p>Events</p>
                    <p>Why Vastraa?</p>
                    <p>Team</p>
                </div>
                <div className='flex flex-col space-y-5'>
                    <div className='flex space-x-2'>
                        {<MapPin />}
                        <h2 className='text-[#DF37AE] font-semibold text-2xl'>Jayanagar</h2>
                    </div>
                    <p>69, 9th Main Rd, Jaya Nagar 1st Block,
                        Jayanagar 3rd Block East, Jayanagar,
                        Bengaluru, Karnataka 560011</p>
                    <p className='font-semibold'>+91-9986178988</p>
                </div>
                <div className='flex flex-col space-y-5'>
                    <div className='flex space-x-2'>
                        {<MapPin />}
                        <h2 className='text-[#DF37AE] font-semibold text-2xl'>Whitefiled</h2>
                    </div>
                    <p>No A/2, Inner Cir Rd, Whitefield,
                        Dodsworth Layout, Bengaluru,
                        Karnataka 560066</p>
                    <p>+91-9986178988</p>
                </div>
            </div>
        </div>
    )
}

export default Footer