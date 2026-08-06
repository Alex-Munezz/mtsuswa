import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import gallery1 from "../images/gallery1.jpeg";
import gallery2 from "../images/gallery2.jpeg";
import gallery3 from "../images/gallery3.jpeg";
import gallery4 from "../images/gallery4.jpeg";
import gallery5 from "../images/gallery5.jpeg";
import gallery6 from "../images/gallery6.jpeg";
import gallery7 from "../images/gallery7.jpeg";
import gallery8 from "../images/gallery8.jpeg";
import gallery9 from "../images/gallery9.jpeg";
import gallery10 from "../images/gallery10.jpeg";
import gallery11 from "../images/gallery11.jpeg";
import gallery12 from "../images/gallery12.jpeg";
import gallery13 from "../images/gallery13.jpeg";
import gallery14 from "../images/gallery14.jpeg";
import gallery15 from "../images/gallery15.jpeg";
import gallery16 from "../images/gallery16.jpeg";
import { Helmet } from "react-helmet-async";


export default function Gallery() {
  const images = [
    {
      image: gallery1,
      title: "Crater Views",
      category: "Hiking",
      size: "tall",
    },
    {
      image: gallery2,
      title: "Camping Experience",
      category: "Camping",
      size: "normal",
    },
    {
      image: gallery3,
      title: "Lava Caves",
      category: "Adventure",
      size: "normal",
    },
    {
      image: gallery4,
      title: "Maasai Culture",
      category: "Culture",
      size: "tall",
    },
    {
      image: gallery5,
      title: "Wild Landscapes",
      category: "Nature",
      size: "wide",
    },
    {
      image: gallery6,
      title: "Mountain Trails",
      category: "Hiking",
      size: "normal",
    },
    {
      image: gallery7,
      title: "Sunrise Moments",
      category: "Photography",
      size: "normal",
    },
    {
      image: gallery8,
      title: "Campfire Nights",
      category: "Camping",
      size: "tall",
    },
    {
      image: gallery9,
      title: "Adventure Awaits",
      category: "Adventure",
      size: "normal",
    },
    {
      image: gallery10,
      title: "Scenic Beauty",
      category: "Landscape",
      size: "normal",
    },
    {
      image: gallery11,
      title: "Golden Hour",
      category: "Photography",
      size: "wide",
    },
    {
      image: gallery12,
      title: "Volcanic Terrain",
      category: "Adventure",
      size: "normal",
    },
    {
      image: gallery13,
      title: "Nature Trails",
      category: "Hiking",
      size: "normal",
    },
    {
      image: gallery14,
      title: "Exploring Suswa",
      category: "Camping",
      size: "tall",
    },
    {
      image: gallery15,
      title: "Hidden Beauty",
      category: "Nature",
      size: "normal",
    },
    {
      image: gallery16,
      title: "Memories Forever",
      category: "Adventure",
      size: "wide",
    },
  ];

  return (
    <div className="bg-slate-50">
   <Helmet>

  <title>
    Mount Suswa Gallery | Hiking, Camping & Adventure Photos
  </title>

  <meta
    name="description"
    content="Browse breathtaking photos of Mount Suswa hiking trails, lava caves, camping experiences, wildlife and Maasai cultural adventures."
  />

  <meta
    name="keywords"
    content="Mount Suswa gallery, Mount Suswa photos, Mount Suswa hiking images, Kenya hiking photography, camping photos"
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
    href="https://mountsuswahikencamp.com/gallery"
  />

  <meta
    property="og:title"
    content="Mount Suswa Gallery"
  />

  <meta
    property="og:description"
    content="Discover the beauty of Mount Suswa through stunning hiking, camping and cave exploration photography."
  />

  <meta
    property="og:image"
    content="https://mountsuswahikencamp.com/images/galleryfront.webp"
  />

  <meta
    property="og:url"
    content="https://mountsuswahikencamp.com/gallery"
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
    content="Mount Suswa Gallery"
  />

  <meta
    name="twitter:description"
    content="Explore beautiful images from Mount Suswa adventures."
  />

  <meta
    name="twitter:image"
    content="https://mountsuswahikencamp.com/images/galleryfront.webp"
  />

</Helmet>
      {/* HERO */}
      <section className="relative bg-green-950 py-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-black opacity-90"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white"
        >

          <p className="uppercase tracking-[0.4em] text-green-300 font-semibold">
            Explore Mount Suswa
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Every Picture Tells
            <br />
            An Adventure
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-green-100 text-lg leading-8">
            Discover breathtaking volcanic landscapes, unforgettable camping
            experiences, scenic hiking trails, lava caves and authentic Maasai
            culture through our collection of unforgettable moments.
          </p>

        </motion.div>

      </section>

      {/* INTRO */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <p className="uppercase tracking-[0.3em] text-green-700 font-semibold">
              Gallery
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
              Experience Mount Suswa Through Our Lens
            </h2>

            <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-8">
              From dramatic crater landscapes and lava caves to vibrant
              cultural encounters and unforgettable camping adventures,
              every image captures the spirit of Mount Suswa.
            </p>

          </motion.div>

          {/* Category Pills */}

          <div className="flex flex-wrap justify-center gap-4 mb-16">

            {[
              "All",
              "Adventure",
              "Camping",
              "Nature",
              "Hiking",
              "Culture",
            ].map((item) => (

              <button
                key={item}
                className="
                px-6
                py-3
                rounded-full
                bg-white
                border
                border-green-200
                font-semibold
                text-slate-700
                shadow-sm
                hover:bg-green-700
                hover:text-white
                hover:border-green-700
                transition
                "
              >
                {item}
              </button>

            ))}

          </div>

          {/* GALLERY */}

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

            {images.map((item, index) => (

              <motion.div
                key={index}
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
                  duration: .6,
                  delay: index * .05,
                }}
                className="
                relative
                overflow-hidden
                rounded-[30px]
                break-inside-avoid
                group
                cursor-pointer
                shadow-xl
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className={`
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110

                    ${
                      item.size === "tall"
                        ? "h-[700px]"
                        : item.size === "wide"
                        ? "h-[340px]"
                        : "h-[500px]"
                    }
                  `}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="absolute bottom-0 left-0 p-8 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                  <span className="inline-block bg-green-700 text-white px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-4">
                    {item.category}
                  </span>

                  <h3 className="text-3xl font-black text-white">
                    {item.title}
                  </h3>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* CTA */}

      <section className="pb-24 px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="
            max-w-6xl
            mx-auto
            bg-green-950
            rounded-[40px]
            overflow-hidden
            shadow-2xl
          "
        >

          <div className="px-8 py-16 md:px-16 text-center text-white">

            <p className="uppercase tracking-[0.35em] text-green-300 font-semibold">
              Your Adventure Awaits
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-5 leading-tight">
              Ready To Create Your
              <br />
              Own Mount Suswa Story?
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-green-100 text-lg leading-8">
              Every sunrise, every trail, every cave and every campfire creates
              memories that last a lifetime. Come experience Mount Suswa for
              yourself and discover why it's one of Kenya's most remarkable
              adventure destinations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

              <a
                href="/booking"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-green-700
                  hover:bg-green-800
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  transition
                  shadow-lg
                "
              >
                Book Your Adventure
                <FaArrowRight />
              </a>

              <a
                href="/packages"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-4
                  rounded-full
                  border
                  border-green-400
                  text-green-200
                  hover:bg-green-700
                  hover:border-green-700
                  hover:text-white
                  transition
                "
              >
                View Packages
              </a>

            </div>

          </div>

        </motion.div>

      </section>

    </div>
  );
}