import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // The Navbar Links
  const NavLinks = ["Home", "About", "Portfolio", "Contact", ""];

  // Adding dark/light mode to the document root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-slate-800/80 text-white dark:bg-slate-800/80  dark:text-slate-100 px-6 py-5 shadow-lg fixed top-0 w-full z-50 backdrop-blur"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
        {/* Logo section  */}
        <motion.div
          whileHover={{ scale: 1.1, color: "oklch(37.3% 0.034 259.733)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl font-bold tracking-wider cursor-pointer"
        >
          MyLogo
        </motion.div>

        {/* Desktop Links - need to be centered */}
        <div className="hidden md:flex justify-center">
          <div className="space-x-8 text-lg item-center">
            {NavLinks.map((link) => {
              let to = "/";
              if (link === "Contact") to = "/contact";
              else if (link === "About") to = "/about";
              else if (link === "Portfolio") to = "/portfolio";

              return (
                <motion.div
                  key={link}
                  whileHover={{
                    scale: 1.1,
                    color: "oklch(70.4% 0.04 256.788)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative cursor-pointer inline-block"
                >
                  <Link to={to}>{link}</Link>
                </motion.div>
              );
            })}
            {
              <img
                src="/Flag_of_Kenya.svg"
                alt="Kenyan flag"
                className="w-7 h-5 object-cover rounded ml-2"
                style={{ verticalAlign: "middle" }}
              />
            }
          </div>
        </div>

        {/*Dark/Light mode toggle Mobile menu Button  */}
        <div className="flex items-center gap-3">
          {/* darkmode button  */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-700/50 dark:hover:bg-slate-300/50"
          >
            {darkMode ? <Sun size={25} /> : <Moon size={25} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4 text-center text-lg py-4 rounded-b-xl shadow-md"
          >
            {NavLinks.map((link) => {
              let to = "/";
              if (link === "Contact") to = "/contact";
              else if (link === "About") to = "/about";
              else if (link === "Portfolio") to = "/portfolio";

              return (
                <motion.div
                  key={link}
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ color: "oklch(37.3% 0.034 259.733" }}
                >
                  <Link to={to}>{link}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
