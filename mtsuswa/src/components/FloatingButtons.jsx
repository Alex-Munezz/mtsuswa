import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll To Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            onClick={scrollTop}
            className="
              fixed bottom-24 right-6 z-50
              w-12 h-12
              rounded-full
              bg-green-700
              text-white
              flex items-center justify-center
              shadow-lg
              hover:bg-green-800
              transition
            "
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>


      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/254700148521"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14
          rounded-full
          bg-green-600
          text-white
          flex items-center justify-center
          text-3xl
          shadow-xl
          hover:bg-green-700
          transition
        "
      >
        <FaWhatsapp />
      </motion.a>
    </>
  );
}