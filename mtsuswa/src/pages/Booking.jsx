import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMountain, FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
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
      <Helmet>

  <title>
    Book Your Mount Suswa Adventure | Hiking & Camping Reservations
  </title>

  <meta
    name="description"
    content="Book your Mount Suswa hiking, camping, cave exploration or Maasai cultural adventure online. Reserve your preferred dates today."
  />

  <meta
    name="keywords"
    content="Book Mount Suswa, Mount Suswa booking, Mount Suswa hiking reservation, Kenya camping booking, adventure booking Kenya"
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
    href="https://mountsuswahikencamp.com/booking"
  />

  <meta
    property="og:title"
    content="Book Your Mount Suswa Adventure"
  />

  <meta
    property="og:description"
    content="Reserve your hiking, camping and cave exploration experience at Mount Suswa."
  />

  <meta
    property="og:url"
    content="https://mountsuswahikencamp.com/booking"
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
    content="Book Your Mount Suswa Adventure"
  />

  <meta
    name="twitter:description"
    content="Secure your place on an unforgettable Mount Suswa adventure."
  />

  <meta
    name="twitter:image"
    content="https://mountsuswahikencamp.com/images/bookinghero.webp"
  />

</Helmet>

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
                    const extras = data.getAll("extras").join(", ");
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

🎒 Optional Extras:
${extras || "None"}


📅 Check-in:
${data.get("checkIn")}

🏕️ Check-out:
${data.get("checkOut")}

👥 Group Size:
${data.get("groupSize")}

📝 Additional Information:
${data.get("message")}

Thank you.`;

const whatsappUrl = `https://wa.me/254700148521?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl, "_blank");

// Redirect to confirmation page after opening WhatsApp
setTimeout(() => {
  window.location.href = "/booking-confirmed";
}, 1000);

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

     {/* ================= BOOKING SUMMARY ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >

      <p className="uppercase tracking-[0.35em] text-green-700 font-semibold">
        Before You Book
      </p>

      <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900">
        Booking Summary
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
        Here's everything you need to know before confirming your
        Mount Suswa adventure.
      </p>

    </motion.div>

    <div className="grid lg:grid-cols-2 gap-8">

      {/* Included */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-green-50 rounded-[30px] p-8 shadow-lg"
      >

        <h3 className="text-2xl font-black text-green-800 mb-8">
          ✅ What's Included
        </h3>

        <div className="space-y-5">

          {[
            "Professional local guide",
            "Park entry assistance",
            "Camping site access (where applicable)",
            "Lava cave exploration",
            "Maasai cultural experience",
            "Photography opportunities",
            "Safety briefing",
            "Emergency support throughout the trip",
          ].map((item) => (

            <div
              key={item}
              className="flex gap-4 items-start"
            >
              <FaCheckCircle className="text-green-700 mt-1" />

              <span className="text-slate-700">
                {item}
              </span>

            </div>

          ))}

        </div>

      </motion.div>

      {/* Important Information */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[30px] p-8 shadow-lg border border-slate-200"
      >

        <h3 className="text-2xl font-black text-slate-900 mb-8">
          📌 Important Information
        </h3>

        <div className="space-y-6">

          <div>
            <h4 className="font-bold text-green-700 mb-2">
              What To Bring
            </h4>

            <p className="text-slate-600 leading-7">
              Comfortable hiking shoes, warm clothing, drinking water,
              sunscreen, a hat, flashlight for cave exploration and
              personal toiletries for overnight camping.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-green-700 mb-2">
              Booking Confirmation
            </h4>

            <p className="text-slate-600 leading-7">
              Your reservation is confirmed after our team contacts
              you and verifies availability for your selected dates.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-green-700 mb-2">
              Payments
            </h4>

            <p className="text-slate-600 leading-7">
              Payment instructions will be shared after your booking
              request has been reviewed and confirmed.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-green-700 mb-2">
              Cancellation Policy
            </h4>

            <p className="text-slate-600 leading-7">
              Please notify us as early as possible if your plans
              change so we can assist with rescheduling where possible.
            </p>
          </div>

        </div>

      </motion.div>

    </div>

    {/* Bottom Tips */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 bg-green-950 rounded-[30px] p-10 text-white text-center"
    >

      <h3 className="text-3xl font-black">
        💡 Adventure Tips
      </h3>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        <div>
          <h4 className="font-bold text-green-300 mb-3">
            Arrive Early
          </h4>

          <p className="text-green-100 leading-7">
            Morning departures provide the best weather and
            spectacular views of the crater.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-green-300 mb-3">
            Stay Hydrated
          </h4>

          <p className="text-green-100 leading-7">
            Carry enough drinking water, especially for
            hiking and cave exploration.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-green-300 mb-3">
            Dress Comfortably
          </h4>

          <p className="text-green-100 leading-7">
            Wear comfortable hiking clothes and sturdy shoes
            suitable for rocky terrain.
          </p>
        </div>

      </div>

    </motion.div>

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