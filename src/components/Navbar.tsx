import { useState } from 'react'
import vastraa_logo from '../assets/Vastraa_logo.svg'
import { CgClose, CgMenuRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('');

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        setIsOpen(false);
    };

    const linkClasses = (link: string) => (
        link === activeLink ? 'text-gradient' : 'hover:text-gradient'
    );

    return (
        <nav className="sticky top-0 z-20 border-b md:px-[150px] px-4 lg:ml-0 lg:mr-0 bg-[#FBFFFE] font-madeTommy">
            <div className="flex py-3 justify-between items-center w-full">
                <div>
                    <a href="/"><img src={vastraa_logo} alt="Vastraa Logo" /></a>
                </div>

                <button className="md:hidden relative" onClick={handleClick}>
                    {isOpen ? <CgClose className='text-2xl' /> : <CgMenuRight className='text-2xl' />}
                </button>

                {isOpen ? <>
                    <div className='md:hidden w-full fixed right-0 font-semibold'>
                        <div className='h-48 mt-5 text-end absolute flex flex-col items-end w-full'>
                            <div className='bg-[#FBFFFE] flex flex-col p-[24px] rounded-lg space-y-4 font-semibold'>
                                <a
                                    href="#costumes"
                                    onClick={() => handleLinkClick('costumes')}
                                    className={linkClasses('costumes')}
                                >
                                    Costumes
                                </a>
                                <a
                                    href="#events"
                                    onClick={() => handleLinkClick('events')}
                                    className={linkClasses('events')}
                                >
                                    Events
                                </a>
                                <a
                                    href="#whyVastraa"
                                    onClick={() => handleLinkClick('whyVastraa')}
                                    className={linkClasses('whyVastraa')}
                                >
                                    Why Vastraa?
                                </a>
                                <Link
                                    to="/blogs"
                                    onClick={() => handleLinkClick('blogs')}
                                    className={linkClasses('blogs')}
                                >
                                    Blogs
                                </Link>
                                <a
                                    href="#contact"
                                    onClick={() => handleLinkClick('contact')}
                                    className={linkClasses('contact')}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </> :
                    <div className="hidden md:block space-x-6 font-normal">
                        <a
                            href="#costumes"
                            onClick={() => handleLinkClick('costumes')}
                            className={linkClasses('costumes')}
                        >
                            Costumes
                        </a>
                        <a
                            href="#events"
                            onClick={() => handleLinkClick('events')}
                            className={linkClasses('events')}
                        >
                            Events
                        </a>
                        <a
                            href="#whyVastraa"
                            onClick={() => handleLinkClick('whyVastraa')}
                            className={linkClasses('whyVastraa')}
                        >
                            Why Vastraa?
                        </a>
                        <a
                            href="#contact"
                            onClick={() => handleLinkClick('contact')}
                            className={linkClasses('contact')}
                        >
                            Contact
                        </a>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar