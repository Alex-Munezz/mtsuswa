import Hero from "../sections/Hero";
import Experiences from "../sections/Experiences";
import WhyChooseUs from "../sections/WhyChooseUs";
import Testimonials from "../sections/Testimonials";
import PlanAdventure from "../sections/PlanAdventure";
import CTA from "../sections/CTA";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaFire, FaCampground, FaUsers} from "react-icons/fa";
import img1 from "../images/Camping6.webp";
import img2 from "../images/gallery2.jpeg";
import img3 from "../images/gallery3.jpeg";
import img4 from "../images/gallery11.jpeg";
import img5 from "../images/Camping5.webp";
import img6 from "../images/gallery6.jpeg";


export default function Home() {

  const packages = [
  {
    title: "Day Hike",
    price: "From KSh 2,500",
    icon: <FaFire />,
    featured: false,
    button: "Book Day Hike",
    features: [
      "Guided crater hike",
      "Lava cave exploration",
      "Photography stops",
      "Professional guide",
      "Scenic viewpoints",
    ],
  },

  {
    title: "Camping Experience",
    price: "From KSh 6,500",
    icon: <FaCampground />,
    featured: true,
    button: "Book Camping",
    features: [
      "Everything in Day Hike",
      "Camping equipment",
      "Bonfire experience",
      "Dinner & Breakfast",
      "Sunrise hike",
      "Night under the stars",
    ],
  },

  {
    title: "Corporate Team Building",
    price: "Custom Quote",
    icon: <FaUsers />,
    featured: false,
    button: "Request Quote",
    features: [
      "Team activities",
      "Camping option",
      "Meals available",
      "Conference setup",
      "Photography",
    ],
  },
];
const gallery = [
  {
    image: img1,
    title: "Camping Under The Stars",
    span: "col-span-2 row-span-2",
  },

  {
    image: img2,
    title: "Crater Hiking",
    span: "",
  },

  {
    image: img3,
    title: "Volcanic Landscapes",
    span: "",
  },

  {
    image: img4,
    title: "Lava Caves",
    span: "",
  },

  {
    image: img5,
    title: "Sunrise Adventures",
    span: "col-span-2",
  },

  {
    image: img6,
    title: "Adventure Awaits",
    span: "",
  },
];

  return (
    <>
      <Hero />
      <Experiences />
       <WhyChooseUs />
        <section id="packages"
      className="py-32 bg-gradient-to-b from-white via-stone-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[0.4em] text-emerald-600 font-semibold text-sm">
            Packages
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-serif font-bold text-stone-900">
            Choose Your Adventure
          </h2>

          <p className="mt-6 text-lg text-stone-600 leading-8">
            Whether you're looking for a one-day escape or an unforgettable
            weekend beneath the stars, we have an experience designed
            just for you.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20 items-center">

          {packages.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 60 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: index * .15 }}

              className={`

              rounded-[32px]

              p-10

              transition-all

              duration-500

              hover:-translate-y-4

              ${
                item.featured
                  ? "bg-stone-900 text-white shadow-[0_30px_80px_rgba(16,185,129,.35)] scale-105"
                  : "bg-white shadow-xl"
              }

              `}
            >

              {item.featured && (

                <div className="inline-block rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold">

                  MOST POPULAR

                </div>

              )}

              <div className="mt-8 text-5xl text-emerald-500">

                {item.icon}

              </div>

              <h3 className="mt-8 text-3xl font-serif font-bold">
                {item.title}
              </h3>

              <div className="mt-5 text-2xl font-bold text-emerald-500">
                {item.price}
              </div>

              <div className="mt-10 space-y-5">

                {item.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >

                    <FaCheck className="text-emerald-500" />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <button
                className={`
                mt-12
                w-full
                rounded-full
                py-4
                font-semibold
                transition

                ${
                  item.featured
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "bg-stone-900 hover:bg-emerald-600 text-white"
                }

                `}
              >

                {item.button}

                <FaArrowRight className="inline ml-3" />

              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
       <section id="gallery"
      className="py-36 bg-stone-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[0.4em] text-emerald-400 font-semibold text-sm">
            Gallery
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-serif font-bold text-white">
            Moments Worth Remembering
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Every trail, every sunset and every campfire creates memories
            you'll carry long after your adventure ends.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-6 mt-20">

          {gallery.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, scale: .9 }}

              whileInView={{ opacity: 1, scale: 1 }}

              viewport={{ once: true }}

              transition={{ delay: index * .08 }}

              className={`

              group

              relative

              overflow-hidden

              rounded-[30px]

              ${item.span}

              `}

            >

              <img

                src={item.image}

                alt={item.title}

                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-[2000ms]"

              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-emerald-500/20 transition duration-700" />

              <div className="absolute bottom-8 left-8">

                <h3 className="text-white text-2xl font-serif font-bold">

                  {item.title}

                </h3>

              </div>

            </motion.div>

          ))}

        </div>

        <motion.div

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          viewport={{ once: true }}

          className="text-center mt-24"

        >

          <h3 className="text-white text-4xl font-serif font-bold">

            Ready To Create Your Own Story?

          </h3>

          <p className="text-gray-400 mt-5 leading-8 max-w-2xl mx-auto">

            Your next unforgettable adventure begins here.

            Let Mount Suswa surprise you.

          </p>

          <a

            href="#packages"

            className="

            inline-flex

            items-center

            gap-3

            mt-10

            rounded-full

            bg-emerald-600

            hover:bg-emerald-700

            transition

            px-10

            py-5

            font-semibold

            text-white

            "

          >

            Book Your Adventure

            <FaArrowRight />

          </a>

        </motion.div>

      </div>
    </section>
      <Testimonials />
      <PlanAdventure />
      <CTA />
    </>
  );
}