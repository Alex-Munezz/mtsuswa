import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMountain } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "About",
    "Gallery",
    "Packages",
    "Booking",  
    "Contact",
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white text-xl shadow-lg">
              <FaMountain />
            </div>

            <div>
              <h2
                className={`font-black text-xl transition ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Mount Suswa
              </h2>

              <p
                className={`text-xs tracking-[0.3em] uppercase ${
                  isScrolled ? "text-green-700" : "text-green-300"
                }`}
              >
                Hike & Camp
              </p>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            <a
                href={"/"}
                className={`font-medium transition hover:text-green-600 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >Home
              </a>
            {links.map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className={`font-medium transition hover:text-green-600 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {link}
              </a>
            ))}

            <a
              href="/booking"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg"
            >
              Book Adventure
            </a>
          </div>

          {/* Mobile Icon */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden text-3xl ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-screen w-80 bg-white z-50 shadow-2xl p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-black text-2xl text-green-700">
                  Menu
                </h2>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl text-slate-700"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                            <a
                href={"/"}
                className="text-xl font-semibold text-slate-700 hover:text-green-700 transition"
              >Home
              </a>
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-semibold text-slate-700 hover:text-green-700 transition"
                  >
                    {link}
                  </a>
                ))}

                <a
                  href="#booking"
                  className="mt-6 bg-green-700 text-white text-center py-4 rounded-full font-semibold"
                >
                  Book Adventure
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}