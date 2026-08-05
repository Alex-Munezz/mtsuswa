import { motion } from "framer-motion";
import { FaArrowRight, FaMountain, FaCampground, FaFire,} from "react-icons/fa";
import { GiCaveEntrance, GiTribalMask } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";

import hike from "../images/gallery6.jpeg";
import cave from "../images/gallery11.jpeg";
import camping from "../images/Camping2.jpeg";
import wildlife from "../images/wildlife.png";
import bonfire from "../images/Camping6.webp";
import maasai from "../images/gallery12.jpeg";

const experiences = [
  {
    title: "Crater Hiking",
    desc: "Walk across the breathtaking volcanic crater with experienced local guides.",
    icon: <FaMountain />,
    image: hike,
  },
  {
    title: "Lava Cave Exploration",
    desc: "Discover one of Africa's largest volcanic cave systems.",
    icon: <GiCaveEntrance />,
    image: cave,
  },
  {
    title: "Luxury Camping",
    desc: "Spend unforgettable nights beneath millions of stars.",
    icon: <FaCampground />,
    image: camping,
  },
  {
    title: "Wildlife Encounters",
    desc: "Spot baboons, giraffes, antelopes and many native birds.",
    icon: <MdOutlinePets />,
    image: wildlife,
  },
  {
    title: "Bonfire Evenings",
    desc: "Relax beside warm campfires with music and incredible sunsets.",
    icon: <FaFire />,
    image: bonfire,
  },
  {
    title: "Maasai Experience",
    desc: "Immerse yourself in authentic Maasai traditions and culture.",
    icon: <GiTribalMask />,
    image: maasai,
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-32"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[0.35em] text-emerald-600 font-semibold text-sm">
            Discover Mount Suswa
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-serif font-bold text-stone-900">
            Unforgettable Experiences
          </h2>

          <p className="mt-6 text-lg text-stone-600 leading-8">
            Every adventure is carefully designed to immerse you in
            breathtaking landscapes, authentic culture and unforgettable
            moments.
          </p>
        </motion.div>

{/* Experiences Layout */}

<div className="mt-24 grid lg:grid-cols-12 gap-8">

  {/* Featured Card */}

  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: .8 }}
    className="lg:col-span-7 group relative rounded-[32px] overflow-hidden h-[650px] cursor-pointer"
  >

    <img
      src={camping}
      alt="Camping"
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

    <div className="absolute top-8 left-8 bg-white/15 backdrop-blur-xl rounded-full px-5 py-3 flex items-center gap-3 text-white">

      <FaCampground className="text-emerald-300" />

      Featured Experience

    </div>

    <div className="absolute bottom-10 left-10 right-10">

      <h2 className="text-5xl font-serif font-bold text-white leading-tight">

        Luxury Camping
        <br />
        Beneath Millions
        <br />
        of Stars

      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-200 max-w-lg">

        Escape the city and spend unforgettable nights
        surrounded by breathtaking volcanic landscapes,
        campfires and endless skies.

      </p>

      <button className="mt-8 group inline-flex items-center gap-3 rounded-full bg-emerald-600 hover:bg-emerald-700 transition px-8 py-4 text-white font-semibold">

        Explore Experience

        <FaArrowRight className="group-hover:translate-x-1 transition" />

      </button>

    </div>

  </motion.div>

  {/* Right Cards */}

  <div className="lg:col-span-5 flex flex-col gap-8">

    {experiences.slice(0,3).map((item,index)=>(

      <motion.div

        key={index}

        initial={{opacity:0,x:40}}

        whileInView={{opacity:1,x:0}}

        viewport={{once:true}}

        transition={{delay:index*.1}}

        className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"

      >

        <div className="flex">

          <img

            src={item.image}

            alt={item.title}

            className="w-44 h-40 object-cover group-hover:scale-110 transition duration-700"

          />

          <div className="flex-1 p-6">

            <div className="text-2xl text-emerald-600">

              {item.icon}

            </div>

            <h3 className="mt-3 font-serif text-2xl font-bold text-stone-900">

              {item.title}

            </h3>

            <p className="mt-2 text-stone-600 leading-7">

              {item.desc}

            </p>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

</div>

{/* ================= MAASAI EXPERIENCE ================= */}

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative mt-28 rounded-[36px] overflow-hidden h-[520px] group shadow-2xl"
>
  <img
    src={maasai}
    alt="Maasai Cultural Experience"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-[2500ms]"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/30" />

  {/* Decorative glow */}
  <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/20 blur-[120px]" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center">

    <div className="max-w-2xl px-10 md:px-16">

      <span className="uppercase tracking-[0.4em] text-emerald-300 text-sm font-semibold">
        Authentic Cultural Experience
      </span>

      <h2 className="mt-6 text-white font-serif font-bold text-5xl md:text-6xl leading-tight">
        Discover the
        <br />
        Maasai Way of Life
      </h2>

      <p className="mt-8 text-gray-200 text-lg leading-9">
        Go beyond the trails and immerse yourself in one of Kenya's
        most iconic cultures. Meet local Maasai guides, learn ancient
        traditions, experience traditional dances, hear captivating
        stories and discover a way of life that has remained unchanged
        for generations.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">

        <a
          href="#packages"
          className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-emerald-600
          hover:bg-emerald-700
          transition-all
          duration-300
          px-8
          py-4
          text-white
          font-semibold
          shadow-xl
          "
        >
          Discover Cultural Tours

          <FaArrowRight className="group-hover:translate-x-1 transition" />

        </a>

        <div className="flex items-center gap-4 text-white">

          <div className="w-14 h-[1px] bg-white/40"></div>

          <span className="tracking-widest uppercase text-sm text-gray-300">
            Authentic • Local • Memorable
          </span>

        </div>

      </div>

    </div>

  </div>

</motion.div>

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="text-center mt-28"
>

  <h3 className="text-4xl font-serif font-bold text-stone-900">
    Every Adventure Begins With One Step.
  </h3>

  <p className="mt-5 text-stone-600 max-w-2xl mx-auto leading-8">
    Whether you're looking for an unforgettable day hike,
    an overnight camping experience or a complete Mount
    Suswa adventure, we're ready to guide your journey.
  </p>

  <a
    href="#packages"
    className="
    inline-flex
    items-center
    gap-3
    mt-10
    rounded-full
    bg-stone-900
    hover:bg-emerald-700
    transition-all
    duration-300
    px-10
    py-5
    text-white
    font-semibold
    text-lg
    shadow-xl
    "
  >
    View Adventure Packages

    <FaArrowRight />
  </a>

</motion.div>

      </div>
    </section>
  );
}