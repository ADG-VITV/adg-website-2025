"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import DynamicIslandNavbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DomainSection from "@/components/DomainSection";
import ContactUs from "@/components/ContactUs";
import Dock from "@/components/OurTeam";
import BackToTopButton from "../components/BackToTop";
import ParticleBackground from "@/components/ParticleBackground";
import MicroParticles from "@/components/MicroParticles";
import Events from "@/components/Events";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasFaded, setHasFaded] = useState(false);

  useEffect(() => {
    /**
     * 🧠 What this does:
     * - Waits until next.js hydration + a stable paint
     * - Adds a fallback 2.5s timeout (so never stuck)
     * - Then triggers fade
     */
    const handleReady = () => {
      // slight buffer to ensure layout settled
      setTimeout(() => setIsLoading(false), 1200);
      // hard fail-safe: force hide after 4s no matter what
      setTimeout(() => setIsLoading(false), 4000);
    };

    // Wait until browser paints at least once
    if (document.readyState === "complete") handleReady();
    else window.addEventListener("load", handleReady);

    return () => window.removeEventListener("load", handleReady);
  }, []);

  // extra: once loader gone, trigger fade-in
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setHasFaded(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="relative overflow-hidden min-h-screen bg-blue-950">
      {/* ===== Loader ===== */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-blue-950 z-[9999]"
          >
            <Image
              src="/logo.svg"
              alt="ADG VIT Logo"
              width={120}
              height={120}
              className="animate-bounce mb-4"
              priority
            />
            <p className="text-white text-lg font-semibold tracking-widest">
              Loading...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Backgrounds ===== */}
      <ParticleBackground />
      <MicroParticles />

      {/* ===== Content ===== */}
      <motion.div
        className={`relative z-10 transition-opacity duration-700 ${
          hasFaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <DynamicIslandNavbar />
        <Hero />
        <DomainSection />
        <Dock />
        <Events />
        <ContactUs />
        <BackToTopButton />
      </motion.div>
    </div>
  );
}
