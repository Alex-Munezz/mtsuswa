import { motion } from "framer-motion";
import {
  FaMountain,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const exploreLinks = [
    { name: "Home", path: "/" },
    { name: "Experiences", path: "/experiences" },
    { name: "Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const experienceLinks = [
    "Mountain Hiking",
    "Camping Adventures",
    "Lava Cave Exploration",
    "Maasai Cultural Tours",
    "Sunset Experiences",
  ];

  return (
    <footer className="bg-green-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >

          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white text-xl shadow-lg">
                <FaMountain />
              </div>

              <div>
                <h2 className="font-black text-xl">
                  Mount Suswa
                </h2>

                <p className="text-xs tracking-[0.3em] uppercase text-green-300">
                  Hike & Camp
                </p>
              </div>
            </a>

            <p className="text-green-100 leading-relaxed">
              Discover the wild beauty of Mount Suswa.
              Experience breathtaking hikes, unforgettable
              camping adventures, volcanic caves, and the
              magic of Kenya's Great Rift Valley.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-700 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-700 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/254700148521"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-700 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>


          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Explore
            </h3>

            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-green-100 hover:text-green-300 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Experiences */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Experiences
            </h3>

            <ul className="space-y-4">
              {experienceLinks.map((item) => (
                <li
                  key={item}
                  className="text-green-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-green-400 mt-1" />

                <p className="text-green-100">
                  Mount Suswa,
                  Great Rift Valley, Kenya
                </p>
              </div>


              <div className="flex gap-3 items-center">
                <FaPhone className="text-green-400" />

                <p className="text-green-100">
                  +254 700 148521
                </p>
              </div>


              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-green-400" />

                <p className="text-green-100">
                  inquiries@mountsuswahikencamp.com
                </p>
              </div>

            </div>


            <a
              href="/contact"
              className="inline-block mt-8 bg-green-700 hover:bg-green-800 px-6 py-3 rounded-full font-semibold transition shadow-lg"
            >
              Book Adventure
            </a>

          </div>

        </motion.div>

      </div>


      {/* Bottom */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-green-200 text-sm text-center">
            © 2026 Mount Suswa Camping. All rights reserved.
          </p>


          <p className="text-green-300 text-sm">
            Designed & Developed by{" "}
            <span className="font-bold text-white">
              Altiora Technologies
            </span>
          </p>

        </div>
      </div>

    </footer>
  );
}