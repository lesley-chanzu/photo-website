import { motion } from "framer-motion";

const AnimatedService = ({ service, index }) => {

  return (
    <motion.div
     initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-bold text-slate-100  rounded-xl shadow px-8 py-6 mb-8 text-center font-edu"
    >
      {service}
    </motion.div>
  );
};

export default AnimatedService;
