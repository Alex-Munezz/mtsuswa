import { motion } from "framer-motion";
import { FaArrowLeft, FaMountain, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-stone-950 via-stone-900 to-green-950 text-white px-6">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Mountains */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-24 right-16 opacity-10 hidden lg:block"
      >
        <FaMountain size={180} />
      </motion.div>

      <div className="relative z-10 max-w-3xl text-center">

        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .7 }}
          className="text-8xl md:text-[170px] font-black text-emerald-500 leading-none"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="text-4xl md:text-5xl font-bold mt-4"
        >
          Looks like you've wandered off the trail.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .35 }}
          className="mt-6 text-slate-300 text-lg leading-relaxed"
        >
          The page you're looking for doesn't exist, may have been moved,
          or perhaps it's hidden somewhere inside Mount Suswa's ancient
          lava caves.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-5"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 transition px-8 py-4 rounded-full font-semibold shadow-xl"
          >
            <FaHome />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-3 border border-emerald-500 hover:bg-emerald-500 transition px-8 py-4 rounded-full font-semibold"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </motion.div>

        {/* Fun Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: .7 }}
          transition={{ delay: .8 }}
          className="mt-14 text-sm tracking-wide uppercase text-emerald-300"
        >
          "Every adventure starts with taking the wrong path... but we'll help
          you find your way."
        </motion.div>

      </div>
    </section>
  );
}