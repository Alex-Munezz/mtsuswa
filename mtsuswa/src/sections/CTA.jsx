import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden py-36"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-700" />

      {/* Decorative Blobs */}

      <div className="absolute -top-40 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="uppercase tracking-[0.45em] text-emerald-200 text-sm font-semibold">
            Adventure Awaits
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
            Ready To Explore
            <br />
            Mount Suswa?
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-200 max-w-3xl mx-auto">
            Escape the ordinary and experience breathtaking crater hikes,
            ancient lava caves, unforgettable camping and authentic Maasai
            culture in one extraordinary destination.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-6 mt-14">

            <a
              href="https://wa.me/254700148521"
              target="_blank"
              rel="noreferrer"
              className="
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-white
              hover:bg-gray-100
              transition
              px-10
              py-5
              text-lg
              font-semibold
              text-emerald-700
              shadow-2xl
              "
            >

              <FaWhatsapp />

              Chat On WhatsApp

            </a>

            <a
              href="tel:+254700148521"
              className="
              inline-flex
              items-center
              gap-4
              rounded-full
              border-2
              border-white
              hover:bg-white
              hover:text-emerald-700
              transition
              px-10
              py-5
              text-lg
              font-semibold
              text-white
              "
            >

              <FaPhoneAlt />

              Call Us

            </a>

          </div>

          {/* Bottom */}

          <div className="mt-20 flex flex-wrap justify-center gap-10 text-white">

            <div>

              <h3 className="text-4xl font-bold">
                4.9★
              </h3>

              <p className="text-gray-200 mt-2">
                Guest Rating
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold">
                10K+
              </h3>

              <p className="text-gray-200 mt-2">
                Happy Adventurers
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold">
                365
              </h3>

              <p className="text-gray-200 mt-2">
                Days of Adventure
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}