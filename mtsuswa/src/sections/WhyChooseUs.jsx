import { motion } from "framer-motion";
import {
  FaMountain,
  FaUserShield,
  FaCompass,
  FaCampground,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaMountain />,
    title: "Hidden Natural Wonder",
    text: "Explore one of Kenya's most unique volcanic landscapes, from crater rims to ancient lava caves.",
  },
  {
    icon: <FaUserShield />,
    title: "Experienced Local Guides",
    text: "Our knowledgeable guides ensure every adventure is safe, informative and unforgettable.",
  },
  {
    icon: <FaCompass />,
    title: "Authentic Adventure",
    text: "Every trip combines hiking, culture, wildlife and breathtaking scenery into one experience.",
  },
  {
    icon: <FaCampground />,
    title: "Memorable Camping",
    text: "Sleep beneath incredible star-filled skies and wake up to unforgettable crater sunrises.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-36 bg-gradient-to-b from-stone-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[0.4em] text-emerald-600 text-sm font-semibold">
            Why Choose Mount Suswa
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-serif font-bold text-stone-900">
            More Than A Hike
          </h2>

          <p className="mt-6 text-lg text-stone-600 leading-8">
            Mount Suswa offers an experience unlike anywhere else in Kenya —
            combining adventure, nature, culture and unforgettable moments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {reasons.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="bg-white rounded-[30px] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-serif font-bold text-stone-900">
                {item.title}
              </h3>

              <p className="mt-4 text-stone-600 leading-8">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
        >

          {[
            ["10K+", "Happy Adventurers"],
            ["4.9★", "Guest Rating"],
            ["100+", "Group Tours"],
            ["365", "Days of Adventure"],
          ].map(([number, label], index) => (

            <div
              key={index}
              className="bg-stone-900 rounded-3xl py-10 text-center"
            >
              <h3 className="text-4xl font-bold text-emerald-400">
                {number}
              </h3>

              <p className="mt-3 text-gray-300">
                {label}
              </p>

            </div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}