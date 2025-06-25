import React, { useState } from "react";
import "./Whatsapp.css";
import { Gift, MessageCircleX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Whatsapp: React.FC = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState<boolean>(false);

  const messages = {
    type: "incoming",
    text: "Hi there 👋\nWelcome to Vastraa!",
  };

  const handleToggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div className={`app ${isChatbotVisible ? "show-chatbot" : ""}`}>
      <motion.button
        className="chatbot-toggler"
        onClick={handleToggleChatbot}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isChatbotVisible ? 0 : [0, -10, 10, -10, 0],
        }}
        transition={{
          rotate: { duration: 2, repeat: Infinity, repeatDelay: 3 },
          scale: { type: "spring", stiffness: 400, damping: 10 },
        }}
      >
        <AnimatePresence mode="wait">
          {isChatbotVisible ? (
            <motion.span
              key="close"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.3 }}
            >
              <MessageCircleX className="h-10 w-10 text-[#25D366]" />
            </motion.span>
          ) : (
            <motion.img
              key="whatsapp"
              src="/whatsapp.svg"
              alt="whatsapp"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isChatbotVisible && (
          <motion.div
            className="chatbot m-[65px] h-[300px] w-[280px] rounded-lg md:m-0 md:h-[350px] md:w-[400px] md:rounded-[12px]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.3,
            }}
          >
            <motion.header
              className="bg-[#25D366] text-[#FBFFFE]"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <h2 className="text-base font-bold md:font-medium">
                Connect with us for <br /> Costumes and Events
              </h2>
            </motion.header>

            <ul className="chatbox">
              <motion.li
                className={`chat ${messages.type}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {messages.type === "incoming" && (
                  <motion.span
                    className="material-symbols-outlined"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <Gift className="text-[#25D366]" />
                  </motion.span>
                )}
                <p className="text-base lg:font-normal">{messages.text}</p>
              </motion.li>
            </ul>

            <motion.div
              className="chat-input"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <motion.a
                rel="noreferrer"
                className="flex w-full items-center justify-center bg-[#25D366] px-6 py-2 text-lg font-normal text-white md:text-xl lg:h-[48px]"
                href="https://wa.me/919019558988"
                target="_blank"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.button
                  className="h-10 text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  Click Here For Enquiry
                </motion.button>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Whatsapp;
