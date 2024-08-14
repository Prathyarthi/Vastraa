import React, { useState } from 'react';
import './Whatsapp.css';
import { Gift, MessageCircleX } from 'lucide-react';

const Whatsapp: React.FC = () => {
    const [isChatbotVisible, setIsChatbotVisible] = useState<boolean>(false);

    const messages = {
        type: 'incoming',
        text: 'Hi there 👋\nWelcome to Vastraa!'
    }

    const handleToggleChatbot = () => {
        setIsChatbotVisible(!isChatbotVisible);
    };

    return (
        <div className={`app ${isChatbotVisible ? 'show-chatbot' : ''}`}>
            <button className="chatbot-toggler" onClick={handleToggleChatbot}>
                {isChatbotVisible ? (
                    <span><MessageCircleX className='w-10 h-10 text-[#25D366]' /></span>
                ) : (
                    <img src="/public/whatsapp.svg" alt="whatsapp " />
                )}
            </button>
            <div className="chatbot">
                <header className='bg-[#25D366] text-[#FBFFFE]'>
                    <h2>Connect with us for <br /> Costumes and Events</h2>
                    {/* <span className="close-btn material-symbols-outlined" onClick={handleToggleChatbot}>close</span> */}
                </header>
                <ul className="chatbox">
                    <li className={`chat ${messages.type}`}>
                        {messages.type === 'incoming' && <span className="material-symbols-outlined"><Gift className='text-[#25D366]' /></span>}
                        <p className='md:text-xl lg:font-normal'>{messages.text}</p>
                    </li>
                </ul>
                <div className="chat-input">
                    <a rel="noreferrer" className='bg-[#25D366] font-normal text-white px-6 py-2 w-full lg:h-[48px] flex justify-center items-center md:text-xl text-lg' href="https://wa.me/919986178988" target='_blank'>
                        <button className="">Click Here For Enquiry</button>
                    </a>
                </div>
            </div>
        </div>
    );
};


export default Whatsapp