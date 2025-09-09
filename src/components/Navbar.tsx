"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#tech-club-banner", label: "Home" },
  { href: "#domains", label: "Domains" },
  { href: "#our-team", label: "Team" },
  { href: "#events", label: "Events" },
  { href: "#contact-us", label: "Contact Us" },
];

const DynamicIslandNavbar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(href)
    }
  }

  const handleScroll = useCallback(() => {
    const scrollThreshold = 50;
    const isScrolled = window.scrollY > scrollThreshold;
    setScrolled(isScrolled);
    setExpanded(isScrolled);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMouseLeave = useCallback(() => {
    if (!scrolled) {
      timeoutRef.current = setTimeout(() => setExpanded(false), 300);
    }
  }, [scrolled]);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setExpanded(true);
  }, []);

  const getNavbarWidth = () => {
    if (typeof window === "undefined") return 130;

    const width = window.innerWidth;

    if (width < 770) {
      return width - 32; 
    } else if (width <= 900) {
      return 770;
    } else if (width <= 1269) {
      return 900;
    } else {
      return 1269;
    }
  };

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-60"
      aria-label="Main navigation"
    >
      <div className="absolute inset-0 w-full h-full rounded-full shadow-[0_0_20px_5px_rgba(168,85,247,0.8)]"></div>
      <motion.div
        className="flex items-center justify-center px-5 py-2 rounded-full border-2 border-purple-500 bg-black/50 backdrop-blur-lg shadow-lg"
        initial={{ width: 130, height: 60 }}
        animate={{
          width: expanded ? getNavbarWidth() : 130,
          height: 60,
          borderRadius: 999,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-expanded={expanded}
      >

        <div className={`flex items-center ${expanded ? 'mr-auto' : 'justify-center'}`}>
          <Image
            src="/logo.svg"
            alt="Company Logo"
            width={34}
            height={35}
            priority
            className="object-contain"
          />
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              className="flex flex-row lg:gap-30 md:gap-15 gap-6 px-6 text-white text-base md:text-lg font-semibold items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, staggerChildren: 0.1 }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-purple-300 text-sm md:text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label={link.label}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {expanded && (
            <motion.button
              onClick={() => setExpanded(false)}
              className="ml-auto text-white text-md md:text-xl hover:text-purple-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-4 md:pr-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close navigation"
            >
              ✕
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default DynamicIslandNavbar;