import { useState } from 'react'
import vastraa_logo from '../assets/Vastraa_logo.svg'
import { CgClose, CgMenuRight } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('');

    const navigate = useNavigate();

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        setIsOpen(false);

        if (link === 'blogs') {
            navigate('/blogs');
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(link);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
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
                    {isOpen ? <CgClose className='text-[32px]' /> : <CgMenuRight className='text-[32px]' />}
                </button>

                {isOpen ? <>
                    <div className='md:hidden w-full fixed right-0 font-semibold'>
                        <div className='h-48 mt-5 text-end absolute flex flex-col items-end w-full'>
                            <div className='bg-[#FBFFFE] flex flex-col p-[24px] rounded-lg space-y-4 font-semibold'>
                                <a
                                    href="/"
                                    onClick={() => handleLinkClick('/')}
                                    className={linkClasses('/')}
                                >
                                    Home
                                </a>
                                <Link
                                    to="/#costumes"
                                    onClick={() => handleLinkClick('costumes')}
                                    className={linkClasses('costumes')}
                                >
                                    Costumes
                                </Link>
                                <Link
                                    to="/#events"
                                    onClick={() => handleLinkClick('events')}
                                    className={linkClasses('events')}
                                >
                                    Events
                                </Link>
                                <Link
                                    to="/#whyVastraa"
                                    onClick={() => handleLinkClick('whyVastraa')}
                                    className={linkClasses('whyVastraa')}
                                >
                                    Why Vastraa?
                                </Link>
                                <Link
                                    to="/blogs"
                                    onClick={() => handleLinkClick('blogs')}
                                    className={linkClasses('blogs')}
                                >
                                    Blogs
                                </Link>
                                <Link
                                    to="/#contact"
                                    onClick={() => handleLinkClick('contact')}
                                    className={linkClasses('contact')}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </> :
                    <div className="hidden md:block space-x-6 font-normal">
                        <a
                            href="/"
                            onClick={() => handleLinkClick('/')}
                            className={linkClasses('/')}
                        >
                            Home
                        </a>
                        <Link
                            to="/#costumes"
                            onClick={() => handleLinkClick('costumes')}
                            className={linkClasses('costumes')}
                        >
                            Costumes
                        </Link>
                        <Link
                            to="/#events"
                            onClick={() => handleLinkClick('events')}
                            className={linkClasses('events')}
                        >
                            Events
                        </Link>
                        <Link
                            to="/#whyVastraa"
                            onClick={() => handleLinkClick('whyVastraa')}
                            className={linkClasses('whyVastraa')}
                        >
                            Why Vastraa?
                        </Link>
                        <Link
                            to="/blogs"
                            onClick={() => handleLinkClick('blogs')}
                            className={linkClasses('blogs')}
                        >
                            Blogs
                        </Link>
                        <Link
                            to="/#contact"
                            onClick={() => handleLinkClick('contact')}
                            className={linkClasses('contact')}
                        >
                            Contact
                        </Link>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar