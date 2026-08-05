import { motion } from "framer-motion";
import { FaCar, FaMountain, FaCampground, FaUsers, FaCheckCircle,} from "react-icons/fa";

export default function Packages() {
const packages = [
  {
    title: "Park Entrance Fees",
    icon: <FaMountain />,
    description:
      "Access Mount Suswa and explore its volcanic landscapes, crater views, and natural wonders.",
    features: [
      "Citizen: KSh 500",
      "Resident: KSh 1,000",
      "Citizen Resident Child: KSh 300",
      "Non-Resident: $30",
      "Non-Resident Child: $10",
    ],
  },
    {
    title: "Transport & Vehicle Fees",
    icon: <FaCar />,
    description:
      "Vehicle charges for visitors exploring Mount Suswa.",
    features: [
      "Car: KSh 500",
      "Bike: KSh 300",
    ],
  },
  {
    title: "Camping Experience",
    icon: <FaCampground />,
    description:
      "Spend a night under the stars surrounded by the beauty of the Great Rift Valley.",
    features: [
      "Adult: KSh 1,000 per night",
      "Child: KSh 500 per night",
      "Firewood: KSh 1,000 per night",
      "Campfire experience",
    ],
  },
  {
    title: "Cultural & Adventure Experiences",
    icon: <FaUsers />,
    description:
      "Experience the culture, history, and adventure of Mount Suswa. This package requires a custom quote based on your group size and preferences.",
    features: [
      "Guiding available",
      "Cave and baboon parliament visit",
      "Crater hiking",
      "Natural steam vents",
      "Maasai cultural experiences",
      "Traditional activities",
    ],
  },
];


  return (
    <section className="bg-gray-300 py-24">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900"
        >
          Adventure Packages
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-2xl mx-auto text-slate-600 text-lg"
        >
          Choose your perfect Mount Suswa adventure and experience
          hiking, camping, caves, and unforgettable moments in nature.
        </motion.p>

      </div>


      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {packages.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.15,
            }}
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:-translate-y-2
              transition
              border
              border-slate-100
            "
          >

            {/* Icon */}
            <div className="
              w-14
              h-14
              rounded-full
              bg-green-700
              text-white
              flex
              items-center
              justify-center
              text-2xl
              mb-6
            ">
              {item.icon}
            </div>


            <h3 className="text-xl font-black text-slate-900 mb-3">
              {item.title}
            </h3>


            <p className="text-slate-600 leading-relaxed mb-6">
              {item.description}
            </p>


            <ul className="space-y-3 mb-6">

              {item.features.map((feature)=>(
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <FaCheckCircle className="text-green-700" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

        ))}

      </div>
<div className="max-w-5xl mx-auto mt-20 px-6">

<div className="
bg-green-950 
rounded-3xl 
p-10 
text-white
">

<h2 className="text-3xl font-black">
Maasai Cultural Stay
</h2>

<p className="mt-4 text-green-200">
Experience authentic Maasai hospitality with traditional meals,
stories, and cultural activities.
</p>


<div className="grid md:grid-cols-2 gap-6 mt-8">

<div className="bg-green-900 rounded-2xl p-6">
<h3 className="font-bold text-xl">
Overnight Maasai Home Stay
</h3>

<p className="mt-3">
KSh 1,000 per person
</p>

</div>


<div className="bg-green-900 rounded-2xl p-6">

<h3 className="font-bold text-xl">
Maasai Manyatta Accommodation
</h3>

<p className="mt-3">
KSh 4,500 per person/night
including supper, lunch and breakfast.
</p>

</div>

</div>

</div>

</div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-6 mt-20">

        <div
          className="
            bg-green-950
            rounded-3xl
            p-10
            md:p-14
            text-center
            text-white
          "
        >

          <h2 className="text-3xl md:text-4xl font-black">
            Ready For Your Mount Suswa Adventure?
          </h2>


          <p className="mt-4 text-green-200">
            Book your experience today and explore one of Kenya's
            most beautiful volcanic destinations.
          </p>


          <a
            href="https://wa.me/254700148521"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-8
              bg-green-700
              hover:bg-green-800
              px-8
              py-4
              rounded-full
              font-bold
              transition
              shadow-lg
            "
          >
            Book Adventure
          </a>

        </div>

      </div>


    </section>
  );
}