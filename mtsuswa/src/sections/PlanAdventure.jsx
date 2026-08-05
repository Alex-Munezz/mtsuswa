import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCar,
  FaHiking,
  FaCloudSun,
  FaCampground,
  FaPhoneAlt,
} from "react-icons/fa";

const tips = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    text: "Mount Suswa is located in Kenya's Great Rift Valley, approximately 120km from Nairobi, making it the perfect day trip or weekend escape.",
  },
  {
    icon: <FaCar />,
    title: "Getting There",
    text: "Travel by private vehicle or let us arrange comfortable transport from Nairobi for individuals and groups.",
  },
  {
    icon: <FaHiking />,
    title: "What To Bring",
    text: "Comfortable hiking shoes, a hat, sunscreen, water, a light jacket and a camera to capture unforgettable views.",
  },
  {
    icon: <FaCloudSun />,
    title: "Best Time To Visit",
    text: "The dry seasons offer the best hiking conditions, while sunrise and sunset provide the most spectacular scenery.",
  },
  {
    icon: <FaCampground />,
    title: "Camping",
    text: "Spend the night beneath millions of stars with our guided camping experiences complete with bonfires and meals.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Easy Booking",
    text: "Reserve your adventure through WhatsApp or call our team directly for personalized assistance.",
  },
];

export default function PlanAdventure() {
  return (
    <section
      id="plan"
      className="py-36 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[0.4em] text-emerald-600 font-semibold text-sm">
            Plan Your Adventure
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-serif font-bold text-stone-900">
            Everything You Need To Know
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            Prepare for an unforgettable journey with essential information
            before visiting Mount Suswa.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {tips.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .1 }}
              className="group rounded-[28px] bg-stone-50 p-8 hover:bg-stone-900 hover:text-white transition-all duration-500 hover:-translate-y-3 shadow-lg"
            >

              <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl group-hover:scale-110 transition">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-serif font-bold">

                {item.title}

              </h3>

              <p className="mt-4 leading-8 text-stone-600 group-hover:text-gray-300 transition">

                {item.text}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}