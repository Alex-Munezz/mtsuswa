import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMountain,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import heroImage from "../images/galleryfront.webp";

export default function Booking() {
  const activities = [
    "Mountain Hiking",
    "Camping Experience",
    "Lava Cave Exploration",
    "Maasai Cultural Tour",
    "Private Tour",
    "Custom Adventure",
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ================= HERO ================= */}

      <section
        className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-5xl px-6 text-center text-white"
        >
          <p className="uppercase tracking-[0.35em] text-green-300 font-semibold">
            Reserve Your Adventure
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Book Your
            <br />
            Mount Suswa Experience
          </h1>

          <p className="mt-8 text-lg md:text-xl text-green-100 leading-8 max-w-3xl mx-auto">
            Choose your adventure, select your preferred dates,
            and reserve your unforgettable Mount Suswa journey.
            Book instantly through WhatsApp or submit your booking
            request through our website.
          </p>
        </motion.div>
      </section>

      {/* ================= BOOKING SECTION ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-5 gap-12">

          {/* ================= FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-[32px] shadow-xl p-10"
          >

            <p className="uppercase tracking-[0.3em] text-green-700 font-semibold">
              Adventure Booking
            </p>

            <h2 className="text-4xl font-black mt-4 mb-10 text-slate-900">
              Reserve Your Trip
            </h2>

            <form
              id="bookingForm"
              action="https://formspree.io/f/mnnaqayz"
              method="POST"
              className="space-y-8"
            >

              {/* Name & Email */}

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-green-700"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-green-700"
                />

              </div>

              {/* Phone + Dates */}

              <div className="grid md:grid-cols-3 gap-6">

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-green-700"
                />

                <div>

                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Check-in Date
                  </label>

                  <input
                    type="date"
                    name="checkIn"
                    required
                    className="w-full border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-green-700"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Check-out Date
                  </label>

                  <input
                    type="date"
                    name="checkOut"
                    required
                    className="w-full border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-green-700"
                  />

                </div>

              </div>

              {/* Activities */}

              <div>

                <label className="block font-semibold text-slate-700 mb-5">
                  Select Activities
                </label>

                <div className="grid md:grid-cols-2 gap-4">

                  {activities.map((activity) => (

                    <label
                      key={activity}
                      className="flex items-center gap-3 border border-slate-200 rounded-2xl p-4 hover:border-green-700 hover:bg-green-50 transition cursor-pointer"
                    >

                      <input
                        type="checkbox"
                        name="activities"
                        value={activity}
                        className="w-5 h-5 accent-green-700"
                      />

                      <span className="font-medium">
                        {activity}
                      </span>

                    </label>

                  ))}

                </div>

              </div>              {/* Group Size */}

              <input
                type="number"
                name="groupSize"
                min="1"
                placeholder="Group Size"
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-green-700"
              />

              {/* Additional Notes */}

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us anything you'd like us to know (transport, dietary requirements, camping preferences, special requests, etc.)"
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 resize-none focus:outline-none focus:border-green-700"
              ></textarea>

              {/* Booking Buttons */}

              <div className="grid md:grid-cols-2 gap-5">

                {/* Formspree */}

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white py-4 rounded-full font-semibold transition shadow-lg"
                >
                  Book via Website
                </button>

                {/* WhatsApp */}

                <button
                  type="button"
                  onClick={() => {

                    const form = document.getElementById("bookingForm");

                    if (!form.checkValidity()) {
                      form.reportValidity();
                      return;
                    }

                    const data = new FormData(form);

                    const activities = data
                      .getAll("activities")
                      .join(", ");

                    const message = `Hello Mount Suswa Team,

I'd like to book an adventure.

👤 Name:
${data.get("name")}

📧 Email:
${data.get("email")}

📱 Phone:
${data.get("phone")}

🥾 Activities:
${activities}

📅 Check-in:
${data.get("checkIn")}

🏕️ Check-out:
${data.get("checkOut")}

👥 Group Size:
${data.get("groupSize")}

📝 Additional Information:
${data.get("message")}

Thank you.`;

                    window.open(
                      `https://wa.me/254700148521?text=${encodeURIComponent(message)}`,
                      "_blank"
                    );

                  }}
                  className="bg-[#25D366] hover:bg-[#1EBE5B] text-white py-4 rounded-full font-semibold transition shadow-lg flex items-center justify-center gap-3"
                >
                  <FaWhatsapp />
                  Book via WhatsApp
                </button>

              </div>

            </form>

          </motion.div>

          {/* ================= SIDEBAR ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >

            {/* Booking Info */}

            <div className="bg-green-950 rounded-[32px] p-10 text-white shadow-xl">

              <FaMountain className="text-5xl text-green-300 mb-6" />

              <h3 className="text-3xl font-black">
                Booking Information
              </h3>

              <p className="mt-5 text-green-100 leading-8">
                Your booking request will be reviewed by our team.
                We'll contact you as soon as possible to confirm
                availability and finalize your adventure.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Professional Local Guides",
                  "Flexible Booking Dates",
                  "Camping Equipment Available",
                  "Private & Group Tours",
                  "Safe & Secure Adventures",
                  "Instant WhatsApp Support",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <FaCheckCircle className="text-green-300 mt-1" />

                    <span className="text-green-50">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Contact Card */}

            <div className="bg-white rounded-[32px] p-10 shadow-xl">

              <h3 className="text-2xl font-black text-slate-900 mb-8">
                Need Assistance?
              </h3>

              <div className="space-y-7">

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>

                  <div>

                    <h4 className="font-bold">
                      Phone
                    </h4>

                    <p className="text-slate-600">
                      +254 700 148 521
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center">
                    <FaEnvelope />
                  </div>

                  <div>

                    <h4 className="font-bold">
                      Booking Email
                    </h4>

                    <p className="text-slate-600 break-all">
                      bookings@mountsuswahikencamp.com
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center">
                    <FaEnvelope />
                  </div>

                  <div>

                    <h4 className="font-bold">
                      General Enquiries
                    </h4>

                    <p className="text-slate-600 break-all">
                      inquiries@mountsuswahikencamp.com
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
            {/* ================= HOW BOOKING WORKS ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <p className="uppercase tracking-[0.35em] text-green-700 font-semibold">
              Simple Booking Process
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900">
              Booking Takes Less Than 2 Minutes
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                number: "01",
                title: "Choose Activities",
                text: "Select the adventures you'd like to experience.",
              },
              {
                number: "02",
                title: "Pick Your Dates",
                text: "Choose your preferred check-in and check-out dates.",
              },
              {
                number: "03",
                title: "Submit Booking",
                text: "Book via WhatsApp or send your request through our website.",
              },
              {
                number: "04",
                title: "Enjoy Your Adventure",
                text: "Receive confirmation and prepare for an unforgettable experience.",
              },
            ].map((step, index) => (

              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-slate-50 rounded-3xl p-8 shadow-lg text-center"
              >

                <div className="w-16 h-16 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-xl font-black mb-6">
                  {step.number}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {step.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <p className="uppercase tracking-[0.35em] text-green-700 font-semibold">
              Happy Adventurers
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900">
              What Our Guests Say
            </h2>

          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">

            {[
              {
                name: "Sarah W.",
                review:
                  "The hike was breathtaking and the guides were incredibly knowledgeable. Highly recommend!",
              },
              {
                name: "James K.",
                review:
                  "Camping under the stars at Mount Suswa was unforgettable. We'll definitely be back.",
              },
              {
                name: "Brian M.",
                review:
                  "The caves, the scenery and the hospitality exceeded every expectation we had.",
              },
            ].map((testimonial, index) => (

              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-xl p-8"
              >

                <div className="text-yellow-500 text-2xl mb-4">
                  ★★★★★
                </div>

                <p className="text-slate-600 leading-8 italic">
                  "{testimonial.review}"
                </p>

                <h4 className="mt-8 text-lg font-bold text-slate-900">
                  {testimonial.name}
                </h4>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-24 px-6">

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-green-950 rounded-[40px] overflow-hidden shadow-2xl"
        >

          <div className="px-8 py-20 md:px-16 text-center text-white">

            <p className="uppercase tracking-[0.35em] text-green-300 font-semibold">
              Adventure Awaits
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
              Your Mount Suswa Journey
              <br />
              Starts Today
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-green-100 leading-8">
              Whether you're hiking through breathtaking landscapes,
              camping beneath the stars or exploring ancient lava caves,
              we're ready to make your adventure unforgettable.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

              <a
                href="https://wa.me/254700148521"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5B] px-8 py-4 rounded-full font-semibold transition"
              >
                <FaWhatsapp />
                Book via WhatsApp
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("bookingForm")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-full border border-green-300 hover:bg-white hover:text-green-900 transition font-semibold"
              >
                Book via Website
              </button>

            </div>

          </div>

        </motion.div>

      </section>

    </div>
  );
}