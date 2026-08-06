import { motion } from "framer-motion";
import { FaArrowRight, FaStar, FaMountain, } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import hero from "../images/Camping3.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-[zoom_20s_linear_infinite_alternate]"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.55)_100%)]" />

      {/* Emerald Glow */}
      <div className="absolute left-0 top-1/3 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[180px]" />

      {/* Content */}
      <div className="relative z-20 max-w-9xl mx-auto px-6 lg:px-10 w-full">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >

          {/* Heading */}

          <h1
            className="
            mt-16
            font-serif
            font-bold
            leading-[0.9]
            text-white
            text-6xl
            md:text-7xl
            lg:text-[6.7rem]
            "
          >
            Into the
            <br />

            <span className="text-white">
              Heart of Kenya's
            </span>

            <br />

            <span className="text-emerald-400">
              Sleeping Volcano
            </span>

          </h1>

          {/* Paragraph */}

          <p className="mt-10 text-lg md:text-xl text-gray-200 leading-9 max-w-2xl">

            Explore ancient lava caves, breathtaking crater views,
            guided hikes, overnight camping beneath star-filled skies,
            authentic Maasai culture and unforgettable adventures in
            one extraordinary destination.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-6 mt-12">

            <a
              href="/booking"
              className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-emerald-600
              to-green-700
              hover:from-green-700
              hover:to-emerald-600
              px-10
              py-5
              text-lg
              font-semibold
              text-white
              shadow-[0_20px_60px_rgba(16,185,129,.35)]
              transition-all
              duration-300
              "
            >
              Book Your Adventure

              <FaArrowRight className="group-hover:translate-x-1 transition" />

            </a>

          </div>

        </motion.div>

      </div>

      {/* Floating Cards */}

      <motion.div

        initial={{ opacity: 0, y: 40 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ delay: .6 }}

        className="
        absolute
        bottom-10
        right-4
        -translate-x-1/2
        w-full
        max-w-6xl
        px-6
        hidden
        lg:grid
        grid-cols-4
        gap-6
        z-30
        "

      >

        <GlassCard
          icon={<FaStar />}
          title="4.9 Rating"
          subtitle="Guest Reviews"
        />

        <GlassCard
          icon={<GiCampingTent />}
          title="Luxury Camping"
          subtitle="Overnight Experiences"
        />

        <GlassCard
          icon={<FaMountain />}
          title="Volcanic Trails"
          subtitle="Guided Adventures"
        />

        <GlassCard
          icon={<MdLocationOn />}
          title="Mount Suswa"
          subtitle="Great Rift Valley"
        />

      </motion.div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent to-stone-50" />

    </section>
  );
}

function GlassCard({ icon, title, subtitle }) {
  return (
    <div
      className="
      backdrop-blur-xl
      bg-white/10
      border
      border-white/10
      rounded-3xl
      p-6
      text-white
      shadow-2xl
      "
    >
      <div className="text-2xl text-emerald-300 mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-xl">
        {title}
      </h3>

      <p className="text-gray-300 mt-1">
        {subtitle}
      </p>

    </div>
  );
}