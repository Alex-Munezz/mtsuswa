import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// import person1 from "../images/person1.jpg";
// import person2 from "../images/person2.jpg";
// import person3 from "../images/person3.jpg";

const testimonials = [
  {
    name: "Sarah Wanjiku",
    role: "Weekend Explorer",
    // image: person1,
    review:
      "Mount Suswa exceeded every expectation. The hike was breathtaking, the caves were unlike anything I've ever seen and the guides made the experience unforgettable.",
  },

  {
    name: "Brian Otieno",
    role: "Adventure Enthusiast",
    // image: person2,
    review:
      "The overnight camping experience was magical. Watching the sunrise over the crater while enjoying breakfast is something I'll never forget.",
  },

  {
    name: "Amina Hassan",
    role: "Travel Blogger",
    // image: person3,
    review:
      "From the scenery to the Maasai cultural experience, every moment felt authentic. I can't wait to bring more friends here.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-36 bg-gradient-to-b from-stone-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[0.4em] text-emerald-600 text-sm font-semibold">
            Guest Stories
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-serif font-bold text-stone-900">
            What Our Adventurers Say
          </h2>

          <p className="mt-6 text-lg text-stone-600 leading-8">
            Thousands of unforgettable memories have started right here.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 50 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: index * .15 }}

              className="
              bg-white
              rounded-[32px]
              p-10
              shadow-xl
              hover:shadow-2xl
              hover:-translate-y-3
              transition-all
              duration-500
              "

            >

              <FaQuoteLeft className="text-emerald-500 text-4xl" />

              <p className="mt-8 text-stone-600 leading-8">
                {item.review}
              </p>

              <div className="flex mt-8">

                {[1,2,3,4,5].map((star)=>(

                  <FaStar
                    key={star}
                    className="text-yellow-400"
                  />

                ))}

              </div>

              <div className="flex items-center gap-5 mt-10">
                <div>

                  <h4 className="font-bold text-xl text-stone-900">
                    {item.name}
                  </h4>

                  <p className="text-stone-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}