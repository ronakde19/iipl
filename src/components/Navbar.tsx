import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface md:glass shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="IIPL Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-secondary-container text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:translate-y-[-1px] active:scale-95 transition-all shadow-sm"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-on-surface hover:bg-surface-container-highest rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-surface-container-low z-50 md:hidden shadow-2xl flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <img src="/input_file_0.png" alt="IIPL Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "text-xl font-bold transition-colors py-2",
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-on-surface-variant"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="block w-full bg-primary text-on-primary text-center py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
