// Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About", "Services", "Contact Us"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black text-white px-6 py-4 shadow-lg fixed top-0 w-full z-50"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.1, color: "#c084fc" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl font-bold tracking-wider cursor-pointer"
        >
          MyLogo
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              whileHover={{ scale: 1.1, color: "#c084fc" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative cursor-pointer"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4 text-center text-lg bg-black py-4 rounded-b-xl shadow-md"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ color: "#c084fc" }}
                className="block"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

