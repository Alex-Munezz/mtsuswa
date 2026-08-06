import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import heroImage from "../images/galleryfront.webp";

export default function BookingConfirmed() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ================= HERO ================= */}

      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="relative z-10 max-w-5xl px-6 text-center text-white"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: .2,
              type: "spring",
              stiffness: 180,
            }}
            className="w-28 h-28 rounded-full bg-green-600 flex items-center justify-center mx-auto shadow-2xl"
          >
            <FaCheckCircle className="text-6xl text-white" />
          </motion.div>

          <p className="uppercase tracking-[0.4em] text-green-300 font-semibold mt-8">
            Booking Successful
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-5 leading-tight">
            Your Adventure
            <br />
            Begins Here
          </h1>

          <p className="mt-8 text-lg md:text-xl text-green-100 leading-8 max-w-3xl mx-auto">
            Thank you for choosing Mount Suswa Hike & Camp.
            We've received your booking request and our team
            will review it shortly.
          </p>

        </motion.div>

      </section>

      {/* ================= SUCCESS CARD ================= */}
< br />< br />< br />< br />< br />< br />
      <section className="max-w-6xl mx-auto px-6 -mt-24 relative z-20">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          className="bg-white rounded-[40px] shadow-2xl overflow-hidden"
        >

          <div className="p-10 md:p-16">

            <div className="flex flex-col lg:flex-row gap-12">

              {/* Left */}

              <div className="lg:w-2/3">

                <span className="inline-block bg-green-100 text-green-800 px-5 py-2 rounded-full font-semibold">
                  Booking Received ✓
                </span>

                <h2 className="text-4xl font-black text-slate-900 mt-8">
                  Thank You For Booking With Us!
                </h2>

                <p className="mt-6 text-slate-600 leading-8 text-lg">
                  Your booking request has been successfully received.
                  Our reservations team will carefully review your
                  selected activities, preferred dates and group details
                  before confirming availability.
                </p>

                <p className="mt-6 text-slate-600 leading-8">
                  If you submitted your booking through WhatsApp,
                  simply continue the conversation there and our team
                  will assist you as quickly as possible.
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-6">

                  <div className="bg-green-50 rounded-3xl p-6">

                    <FaWhatsapp className="text-4xl text-green-700 mb-4" />

                    <h3 className="font-bold text-xl">
                      WhatsApp Booking
                    </h3>

                    <p className="mt-3 text-slate-600 leading-7">
                      Continue your conversation on WhatsApp for
                      the fastest booking confirmation.
                    </p>

                  </div>

                  <div className="bg-green-50 rounded-3xl p-6">

                    <FaEnvelope className="text-4xl text-green-700 mb-4" />

                    <h3 className="font-bold text-xl">
                      Website Booking
                    </h3>

                    <p className="mt-3 text-slate-600 leading-7">
                      We've received your booking request through
                      our website and will respond as soon as possible.
                    </p>

                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="lg:w-1/3">

                <div className="bg-green-950 rounded-[30px] p-8 text-white sticky top-28">

                  <h3 className="text-3xl font-black">
                    Need Help?
                  </h3>

                  <p className="mt-5 text-green-100 leading-8">
                    Have questions about your booking?
                    Reach out anytime and we'll be happy to help.
                  </p>

                  <div className="mt-10 space-y-7">

                    <div className="flex gap-4">

                      <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center">
                        <FaPhoneAlt />
                      </div>

                      <div>

                        <h4 className="font-bold">
                          Call Us
                        </h4>

                        <p className="text-green-100">
                          +254 700 148 521
                        </p>

                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center">
                        <FaEnvelope />
                      </div>

                      <div>

                        <h4 className="font-bold">
                          Bookings
                        </h4>

                        <p className="text-green-100 break-all">
                          bookings@mountsuswahikencamp.com
                        </p>

                      </div>

                    </div>

                    <a
                      href="https://wa.me/254700148521"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5B] py-4 rounded-full font-semibold transition"
                    >
                      <FaWhatsapp />
                      Chat on WhatsApp
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </section>
            {/* ================= WHAT HAPPENS NEXT ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <p className="uppercase tracking-[0.35em] text-green-700 font-semibold">
              What Happens Next?
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
              We'll Take It From Here
            </h2>

            <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-8">
              Our reservations team will review your request and contact you
              shortly to finalize your unforgettable Mount Suswa adventure.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                step: "01",
                title: "Booking Received",
                text: "We've safely received your booking request.",
              },
              {
                step: "02",
                title: "Availability Check",
                text: "Our team checks your selected dates and activities.",
              },
              {
                step: "03",
                title: "Confirmation",
                text: "We'll contact you with confirmation and payment details.",
              },
              {
                step: "04",
                title: "Adventure Time",
                text: "Pack your bags and prepare for an amazing experience.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .15 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[30px] shadow-xl p-8 text-center"
              >

                <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center text-xl font-black mx-auto mb-6">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= PREPARE ================= */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] shadow-xl overflow-hidden"
          >

            <div className="grid lg:grid-cols-2">

              {/* Left */}

              <div className="bg-green-950 text-white p-12">

                <p className="uppercase tracking-[0.35em] text-green-300 font-semibold">
                  Get Ready
                </p>

                <h2 className="text-4xl font-black mt-6">
                  Preparing For Your Adventure
                </h2>

                <div className="mt-10 space-y-6">

                  {[
                    "Wear comfortable hiking shoes.",
                    "Carry enough drinking water.",
                    "Bring a warm jacket for the evening.",
                    "Don't forget sunscreen and a hat.",
                    "Carry a flashlight for cave exploration.",
                    "Bring your camera for unforgettable memories.",
                  ].map((tip) => (

                    <div
                      key={tip}
                      className="flex gap-4 items-start"
                    >
                      <FaCheckCircle className="text-green-300 mt-1" />

                      <span className="leading-7">
                        {tip}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* Right */}

              <div className="p-12 flex flex-col justify-center">

                <p className="uppercase tracking-[0.35em] text-green-700 font-semibold">
                  Questions?
                </p>

                <h2 className="text-4xl font-black text-slate-900 mt-6">
                  We're Here To Help
                </h2>

                <p className="mt-6 text-slate-600 leading-8">
                  If you need to make changes to your booking,
                  have special requests or simply need more
                  information, our team is always ready to assist.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-5">

                  <a
                    href="https://wa.me/254700148521"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#1EBE5B] text-white px-8 py-4 rounded-full font-semibold transition text-center"
                  >
                    WhatsApp Us
                  </a>

                  <a
                    href="/contact"
                    className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-full font-semibold transition text-center"
                  >
                    Contact Us
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-24 px-6">

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gradient-to-r from-green-900 to-green-700 rounded-[40px] text-white text-center px-8 py-20 shadow-2xl"
        >

          <p className="uppercase tracking-[0.35em] text-green-200 font-semibold">
            Explore More
          </p>

          <h2 className="text-5xl font-black mt-6">
            Thank You For Choosing
            <br />
            Mount Suswa
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-green-100 leading-8">
            We can't wait to welcome you for an unforgettable adventure
            filled with breathtaking landscapes, ancient lava caves,
            incredible wildlife and authentic Maasai culture.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="/"
              className="bg-white text-green-900 hover:bg-green-100 px-8 py-4 rounded-full font-semibold transition"
            >
              Return Home
            </a>

            <a
              href="/packages"
              className="border border-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-full font-semibold transition"
            >
              Explore Packages
            </a>

          </div>

        </motion.div>

      </section>

    </div>
  );
}