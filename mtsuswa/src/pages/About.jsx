import { motion } from "framer-motion";
import {
  FaMountain,
  FaCampground,
  FaFire,
  FaUsers,
  FaPaw,
  FaLeaf,
  FaArrowRight,
} from "react-icons/fa";

import galleryFront from "../images/galleryfront.webp";
import hiking from "../images/Hiking.webp";
import cave from "../images/Cave.webp";
import maasai from "../images/maasai.jpeg";

export default function About() {
  const features = [
    {
      icon: <FaMountain />,
      title: "Volcanic Landscapes",
      description:
        "Explore one of Kenya's most unique double-crater volcanoes with breathtaking scenery.",
    },
    {
      icon: <FaCampground />,
      title: "Camping",
      description:
        "Spend unforgettable nights under star-filled skies surrounded by nature.",
    },
    {
      icon: <FaFire />,
      title: "Lava Caves",
      description:
        "Walk through ancient lava tubes and discover Mount Suswa's fascinating geology.",
    },
    {
      icon: <FaUsers />,
      title: "Maasai Culture",
      description:
        "Experience authentic traditions, storytelling, music and local hospitality.",
    },
    {
      icon: <FaPaw />,
      title: "Wildlife",
      description:
        "Encounter baboons, birds, zebras and other wildlife in their natural habitat.",
    },
    {
      icon: <FaLeaf />,
      title: "Nature Trails",
      description:
        "Discover scenic hiking routes through forests, craters and panoramic viewpoints.",
    },
  ];

  const stats = [
    { number: "2", label: "Volcanic Craters" },
    { number: "15+", label: "Adventure Activities" },
    { number: "365", label: "Days of Adventure" },
    { number: "100%", label: "Nature Experience" },
  ];

  return (
    <div className="bg-slate-50">

      {/* Hero */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${galleryFront})`,
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <p className="uppercase tracking-[0.35em] text-green-300 font-semibold">
            About Mount Suswa
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Where Adventure Meets Nature
          </h1>

          <p className="mt-8 text-xl text-gray-200 leading-relaxed">
            Discover breathtaking volcanic landscapes, ancient caves,
            unforgettable camping experiences, and the rich Maasai culture
            waiting at the heart of Kenya's Great Rift Valley.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={hiking}
            alt="Mount Suswa Hiking"
            className="rounded-3xl shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-green-700 uppercase tracking-[0.3em] font-semibold mb-3">
            Our Story
          </p>

          <h2 className="text-4xl font-black text-slate-900 mb-6">
            A Hidden Gem in Kenya's Great Rift Valley
          </h2>

          <p className="text-slate-600 leading-8 mb-6">
            Mount Suswa is one of Kenya's most spectacular volcanic mountains,
            famous for its twin craters, extensive lava caves, panoramic
            viewpoints, and thriving wildlife. Every visit offers a unique
            opportunity to reconnect with nature while discovering one of East
            Africa's most remarkable landscapes.
          </p>

          <p className="text-slate-600 leading-8">
            Whether you're seeking thrilling hikes, peaceful camping,
            photography, cultural encounters, or simply an escape from city
            life, Mount Suswa promises memories that last a lifetime.
          </p>
        </motion.div>

      </section>

      {/* Features */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-green-700 uppercase tracking-[0.3em] font-semibold">
              Why Visit
            </p>

            <h2 className="text-5xl font-black text-slate-900 mt-4">
              Experience The Best Of Mount Suswa
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:-translate-y-3 transition"
              >
                <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="bg-green-950 py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <h2 className="text-5xl font-black text-green-300">
                {stat.number}
              </h2>

              <p className="mt-4 text-lg text-green-100">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Culture */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-green-700 uppercase tracking-[0.3em] font-semibold">
            Authentic Culture
          </p>

          <h2 className="text-4xl font-black mt-4 mb-6">
            Meet The Maasai Community
          </h2>

          <p className="text-slate-600 leading-8 mb-6">
            Discover authentic Maasai traditions through storytelling,
            traditional dances, local cuisine, beadwork, livestock keeping,
            and centuries-old customs that continue to thrive around
            Mount Suswa.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Book Your Adventure
            <FaArrowRight />
          </a>

        </div>

        <img
          src={maasai}
          alt="Maasai"
          className="rounded-3xl shadow-xl"
        />

      </section>

      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto bg-green-950 rounded-[40px] overflow-hidden">

          <div className="grid lg:grid-cols-2">

            <img
              src={cave}
              alt="Mount Suswa Cave"
              className="h-full w-full object-cover"
            />

            <div className="p-12 text-white flex flex-col justify-center">

              <h2 className="text-4xl font-black">
                Your Next Adventure Starts Here
              </h2>

              <p className="mt-6 text-green-100 leading-8">
                From volcanic caves and crater hikes to unforgettable camping
                experiences, Mount Suswa offers adventures unlike anywhere
                else in Kenya.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 px-8 py-4 rounded-full font-semibold transition w-fit"
              >
                Plan Your Visit
                <FaArrowRight />
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}