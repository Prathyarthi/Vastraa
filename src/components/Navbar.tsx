import { useState } from 'react'
import vastraa_logo from '../assets/Vastraa_logo.svg'
import { CgClose, CgMenuRight } from 'react-icons/cg'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="sticky z-20 border-b lg:px-[200px] ml-[16px] mr-[16px] bg-[#FBFFFE]">
            <div className="flex h-[12vh] justify-between items-center w-full">
                <div>
                    <a href="/"><img src={vastraa_logo} alt="Vastraa Logo" /></a>
                </div>

                <button className="md:hidden relative" onClick={handleClick}>
                    {isOpen ? <CgClose className='text-2xl' /> : <CgMenuRight className='text-2xl' />}
                </button>

                {isOpen ? <>
                    <div className='md:hidden w-full fixed right-0'>
                        <div className='h-48 mt-5 text-end absolute flex flex-col items-end w-full'>
                            <div className='bg-[#FBFFFE] flex flex-col p-[24px] rounded-lg space-y-4 font-semibold'>
                                <a href="/events" className='hover:text-gradient'>Events</a>
                                <a href="/costumes" className='hover:text-gradient'>Costumes</a>
                                <a href="/who" className='hover:text-gradient'>Who are we?</a>
                                <a href="/contact" className='hover:text-gradient'>Contact</a>
                            </div>
                        </div>
                    </div>
                </> :
                    <div className="hidden md:block space-x-6">
                        <a href="/events" className='hover:text-gradient'>Events</a>
                        <a href="/costumes" className='hover:text-gradient'>Costumes</a>
                        <a href="/who" className='hover:text-gradient'>Who are we?</a>
                        <a href="/contact" className='hover:text-gradient'>Contact</a>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar