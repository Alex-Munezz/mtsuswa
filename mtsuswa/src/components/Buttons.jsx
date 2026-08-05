import { motion } from "framer-motion";

export default function Button({
  children,
  primary = true,
  href = "#",
}) {
  return (
    <motion.a
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: .98,
      }}
      href={href}
      className={`px-8 py-4 rounded-full font-semibold transition duration-300 ${
        primary
          ? "bg-green-700 text-white hover:bg-green-800 shadow-xl"
          : "border-2 border-white text-white hover:bg-white hover:text-green-700"
      }`}
    >
      {children}
    </motion.a>
  );
}