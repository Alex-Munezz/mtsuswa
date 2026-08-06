import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaMountain } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import heroImage from "../images/galleryfront.webp";

export default function Contact() {
  return (
    <div className="bg-slate-50">
      <Helmet>

  <title>
    Contact Mount Suswa Hike & Camp | Bookings & Enquiries
  </title>

  <meta
    name="description"
    content="Contact Mount Suswa Hike & Camp for bookings, enquiries, custom adventure packages and travel information. We're here to help plan your next adventure."
  />

  <meta
    name="keywords"
    content="Contact Mount Suswa, Mount Suswa enquiries, Mount Suswa bookings, Kenya hiking contact, camping enquiries"
  />

  <meta
    name="author"
    content="Mount Suswa Hike & Camp"
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <meta
    name="theme-color"
    content="#166534"
  />

  <link
    rel="canonical"
    href="https://mountsuswahikencamp.com/contact"
  />

  <meta
    property="og:title"
    content="Contact Mount Suswa Hike & Camp"
  />

  <meta
    property="og:description"
    content="Reach out to our team for bookings, enquiries and personalized Mount Suswa adventures."
  />

  <meta
    property="og:url"
    content="https://mountsuswahikencamp.com/contact"
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Contact Mount Suswa Hike & Camp"
  />

  <meta
    name="twitter:description"
    content="Get in touch with our team to plan your Mount Suswa adventure."
  />

  <meta
    name="twitter:image"
    content="https://mountsuswahikencamp.com/images/contacthero.webp"
  />

</Helmet>

      {/* ================= HERO ================= */}

      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="relative z-10 max-w-5xl px-6 text-center text-white"
        >
          <p className="uppercase tracking-[0.4em] text-green-300 font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Let's Plan Your
            <br />
            Next Adventure
          </h1>

          <p className="mt-8 text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-8">
            Whether you're planning a hike, camping beneath the stars,
            exploring Mount Suswa's lava caves or experiencing Maasai
            culture, we're ready to help you create an unforgettable trip.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT CARDS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-green-700 font-semibold">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900">
            We'd Love To Hear From You
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Phone */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-2xl mb-6">
              <FaPhoneAlt />
            </div>

            <h3 className="font-bold text-xl mb-3">
              Call Us
            </h3>

            <p className="text-slate-600">
              +254 700 148 521
            </p>
          </motion.div>

          {/* Booking Email */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-2xl mb-6">
              <FaEnvelope />
            </div>

            <h3 className="font-bold text-xl mb-3">
              Bookings
            </h3>

            <p className="text-slate-600 break-all">
              bookings@mountsuswahikencamp.com
            </p>

            <p className="text-sm text-green-700 mt-3">
              Reservations & Tours
            </p>
          </motion.div>

          {/* Enquiries */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-2xl mb-6">
              <FaEnvelope />
            </div>

            <h3 className="font-bold text-xl mb-3">
              Enquiries
            </h3>

            <p className="text-slate-600 break-all">
              inquiries@mountsuswahikencamp.com
            </p>

            <p className="text-sm text-green-700 mt-3">
              General Information
            </p>
          </motion.div>

          {/* Location */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-2xl mb-6">
              <FaMapMarkerAlt />
            </div>

            <h3 className="font-bold text-xl mb-3">
              Location
            </h3>

            <p className="text-slate-600">
              Mount Suswa
              <br />
              Narok County
              <br />
              Kenya
            </p>
          </motion.div>

        </div>

      </section>

      {/* ================= BOOKING SECTION ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-5 gap-10">

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-[30px] shadow-xl p-10"
          >

            <p className="uppercase tracking-[0.3em] text-green-700 font-semibold">
              Booking Form
            </p>

            <h2 className="text-4xl font-black mt-4 text-slate-900 mb-10">
              Book Your Adventure
            </h2>
<form
  id="bookingForm"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mnnaqayz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      window.location.href = "/booking-confirmed";
    } else {
      alert("Something went wrong. Please try again.");
    }
  }}
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

{/* Phone, Check-in & Check-out */}
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
    <label className="block font-semibold text-slate-700 mb-4">
      Select Activities
    </label>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Mountain Hiking",
        "Camping Experience",
        "Lava Cave Exploration",
        "Maasai Cultural Tour",
        "Private Tour",
        "Custom Adventure",
      ].map((activity) => (
        <label
          key={activity}
          className="flex items-center gap-3 border border-slate-200 rounded-2xl p-4 hover:border-green-700 cursor-pointer transition"
        >
          <input
            type="checkbox"
            name="activities"
            value={activity}
            className="accent-green-700 w-5 h-5"
          />

          <span>{activity}</span>
        </label>
      ))}
    </div>
  </div>

                {/* Optional Extras */}

<div>

  <label className="block font-semibold text-slate-700 mb-5">
    Optional Extras
  </label>

  <p className="text-slate-500 mb-5">
    Enhance your Mount Suswa experience with these optional services.
  </p>

  <div className="grid md:grid-cols-2 gap-4">

    {[
      {
        title: "🚐 Transport from Nairobi",
        description: "Round-trip transport to and from Mount Suswa.",
      },
      {
        title: "⛺ Tent Rental",
        description: "Quality camping tent and sleeping setup.",
      },
      {
        title: "🍽️ Meals",
        description: "Breakfast, lunch and dinner during your trip.",
      },
      {
        title: "📸 Professional Photography",
        description: "Capture your adventure with high-quality photos.",
      },
      {
        title: "🔥 Campfire Experience",
        description: "Evening campfire with storytelling and relaxation.",
      },
      {
        title: "🚅 SGR Train Station Pickup",
        description: "Pickup and drop-off from the train station on request.",
      },
    ].map((extra) => (

      <label
        key={extra.title}
        className="border border-slate-200 rounded-2xl p-5 cursor-pointer hover:border-green-700 hover:bg-green-50 transition"
      >

        <div className="flex items-start gap-3">

          <input
            type="checkbox"
            name="extras"
            value={extra.title}
            className="mt-1 w-5 h-5 accent-green-700"
          />

          <div>

            <h4 className="font-bold text-slate-900">
              {extra.title}
            </h4>

            <p className="text-sm text-slate-500 mt-1">
              {extra.description}
            </p>

          </div>

        </div>

      </label>

    ))}

  </div>

</div> 

  {/* Group Size */}
  <input
    type="number"
    name="groupSize"
    placeholder="Group Size"
    min="1"
    className="w-full border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-green-700"
  />

  {/* Message */}
  <textarea
    name="message"
    rows="6"
    placeholder="Tell us about your trip..."
    className="w-full border border-slate-200 rounded-2xl px-5 py-4 resize-none focus:outline-none focus:border-green-700"
  ></textarea>

  {/* Buttons */}
  <div className="grid md:grid-cols-2 gap-4">
    <button
      type="submit"
      className="bg-green-700 hover:bg-green-800 text-white py-4 rounded-full font-semibold transition"
    >
      Book via Website
    </button>

    <button
      type="button"
      onClick={() => {
        const form = document.getElementById("bookingForm");
        const data = new FormData(form);

        const activities = data.getAll("activities").join(", ");
        const extras = data.getAll("extras").join(", ");      

        const message = `Hello Mount Suswa Team,

I'd like to book an adventure.

Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}

Activities:
${activities}

🎒 Optional Extras:
${extras || "None"}

Check In Date: ${data.get("checkIn")}
Check Out Date: ${data.get("checkOut")}
Group Size: ${data.get("groupSize")}

Additional Information:
${data.get("message")}

Thank you.`;

const whatsappUrl = `https://wa.me/254700148521?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl, "_blank");

// Redirect to confirmation page after opening WhatsApp
setTimeout(() => {
  window.location.href = "/booking-confirmed";
}, 1000);

      }}
      className="bg-[#25D366] hover:bg-[#1EBE5B] text-white py-4 rounded-full font-semibold transition"
    >
      Book via WhatsApp
    </button>
  </div>
</form>

          </motion.div>

          {/* SIDEBAR */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >

            <div className="bg-green-950 rounded-[30px] p-10 text-white">

              <FaMountain className="text-5xl text-green-300 mb-6" />

              <h3 className="text-3xl font-black">
                Why Book With Us?
              </h3>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <FaUsers className="text-green-300 mt-1" />
                  <p>Professional local guides.</p>
                </div>

                <div className="flex gap-4">
                  <FaCalendarAlt className="text-green-300 mt-1" />
                  <p>Flexible booking dates.</p>
                </div>

                <div className="flex gap-4">
                  <FaMountain className="text-green-300 mt-1" />
                  <p>Authentic Mount Suswa experiences.</p>
                </div>

              </div>

              <a
                href="https://wa.me/254700148521"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-3 w-full bg-green-700 hover:bg-green-800 py-4 rounded-full font-semibold transition"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= MAP SECTION ================= */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.3em] text-green-700 font-semibold">
                Find Us
              </p>

              <h2 className="text-4xl font-black text-slate-900 mt-4">
                Visit Mount Suswa
              </h2>

              <p className="mt-6 text-slate-600 leading-8">
                Mount Suswa is located in Narok County, approximately
                two to three hours from Nairobi. Our team will gladly
                assist you with directions, meeting points and transport
                arrangements if needed.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h4 className="font-bold">
                      Location
                    </h4>

                    <p className="text-slate-600">
                      Mount Suswa, Narok County, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
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

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <div className="overflow-hidden rounded-[30px] shadow-xl">

                <iframe
                  title="Mount Suswa Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32244.5403348177!2d36.29023432731629!3d-1.1495605656755508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182eb99227e6ddf1%3A0xe39caf365d5abc2e!2sMT.%20SUSWA%20CAMPING!5e1!3m2!1sen!2ske!4v1785951360363!5m2!1sen!2ske" 
                  allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
                  width="100%"
                  height="500"
                  allowFullScreen
                  className="border-0"
                ></iframe>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-green-700 font-semibold">
              Frequently Asked Questions
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900">
              Everything You Need To Know
            </h2>

          </div>

          <div className="space-y-6">

            {[
              {
                q: "Do I need hiking experience?",
                a: "No. We offer adventures suitable for beginners, families and experienced hikers.",
              },
              {
                q: "Can I camp overnight?",
                a: "Yes. We offer both day trips and overnight camping experiences.",
              },
              {
                q: "Do you provide guides?",
                a: "Absolutely. All adventures are led by experienced local guides.",
              },
              {
                q: "Can I book for a group?",
                a: "Yes. We organize trips for families, schools, companies and large groups.",
              },
              {
                q: "How do I pay?",
                a: "Once your booking is confirmed, we'll provide the available payment options and instructions.",
              },
            ].map((faq, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg p-8"
              >

                <h3 className="text-xl font-bold text-slate-900">
                  {faq.q}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {faq.a}
                </p>

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
          className="max-w-6xl mx-auto bg-green-950 rounded-[40px] overflow-hidden"
        >

          <div className="px-8 py-20 md:px-16 text-center text-white">

            <p className="uppercase tracking-[0.35em] text-green-300 font-semibold">
              Adventure Starts Here
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
              Ready To Explore
              <br />
              Mount Suswa?
            </h2>

            <p className="mt-8 text-green-100 text-lg max-w-3xl mx-auto leading-8">
              From breathtaking crater hikes and lava cave adventures
              to unforgettable camping experiences, your next adventure
              is only one booking away.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

              <a
                href="https://wa.me/254700148521"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 px-8 py-4 rounded-full font-semibold transition"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>

              <a
                href="/packages"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-green-300 hover:bg-white hover:text-green-900 transition"
              >
                Explore Packages
              </a>

            </div>

          </div>

        </motion.div>

      </section>

    </div>
  );
}