"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import OurTeamHeading from "@/assets/heading3.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MEMBERS = [
  { id: "1", name: "AMAN DEOL", role: "Technical Head", src: "/team/Aman_Final.png", linkedin: "https://www.linkedin.com/in/aman-muppidi/" },
  { id: "2", name: "RIYA KORADWAR", role: "Management Lead", src: "/team/Riya_Final.png", linkedin: "https://www.linkedin.com/in/riya-koradwar-7a3551277/" },
  { id: "3", name: "ARCHIE JAIN", role: "Publicity Lead", src: "/team/Archie_Final.png", linkedin: "https://www.linkedin.com/in/archie-jain-5778a724b/" },
  { id: "4", name: "RAGHAV MIGLANI", role: "General Secretary", src: "/team/Raghav_Final.png", linkedin: "https://www.linkedin.com/in/raghav-miglani-a90235189/" },
  { id: "5", name: "CHINMAY SINHA", role: "Chairperson", src: "/team/Chinmay_Final.png", linkedin: "https://www.linkedin.com/in/chinmay-sinha-3a9b25258" },
  { id: "6", name: "MANAN AGARWAL", role: "Vice Chairperson", src: "/team/Manan_Final.png", linkedin: "https://www.linkedin.com/in/manan-agarwal-50a723274/" },
  { id: "7", name: "MANSI SAXENA", role: "Co Secretary", src: "/team/Mansi_Final.png", linkedin: "https://www.linkedin.com/in/mansi-saxena-3b264224a/" },
  { id: "8", name: "DAKSH CHAUDHARY", role: "Project Lead", src: "/team/Daksh_Final.png", linkedin: "https://www.linkedin.com/in/daksh-chaudhary-768222277/" },
  { id: "9", name: "PRABHAT PANDEY", role: "R&D Lead", src: "/team/Prabhat_Final.png", linkedin: "https://www.linkedin.com/in/prabhat-pandey-vitv26/" },
];

export default function TeamDock() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 0.8;
    let rafId: number;

    const animate = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    animate();

    const handleUserScroll = () => {
      setIsPaused(true);

      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }

      resumeTimeoutRef.current = window.setTimeout(() => {
        setIsPaused(false);
      }, 2500);
    };

    scrollContainer.addEventListener("scroll", handleUserScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      scrollContainer.removeEventListener("scroll", handleUserScroll);

      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [isPaused]);

  const scrollByAmount = (amount: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="our-team" className="relative w-full py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 -z-10 h-[1600px] w-[1400px] lg:h-[2310px] lg:w-[2000px]">
        <Image
          src="/bg-design-3.svg"
          alt="Background Design"
          fill
          className="object-contain object-left opacity-60"
          priority
        />
      </div>

      {/* Heading */}
      <div className="flex justify-center mb-20">
        <Image src={OurTeamHeading} alt="Our Team" width={800} height={140} />
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scrollByAmount(-300)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-neutral-800/70 hover:bg-neutral-700 text-white p-3 rounded-full shadow-lg z-10"
      >
        <FaChevronLeft size={22} />
      </button>

      <button
        onClick={() => scrollByAmount(300)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-neutral-800/70 hover:bg-neutral-700 text-white p-3 rounded-full shadow-lg z-10"
      >
        <FaChevronRight size={22} />
      </button>

      {/* Scroll Section */}
      <div
        ref={scrollRef}
        className="relative flex overflow-x-auto space-x-8 px-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
        {[...MEMBERS, ...MEMBERS].map((m, i) => (
          <a
            key={i}
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center bg-neutral-800 hover:bg-neutral-700 text-white rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-transform duration-300 ease-out hover:scale-[1.05] w-[16rem] shrink-0 snap-start"
          >
            <div className="relative w-full h-[18rem]">
              <Image
                src={m.src ?? "/profile.svg"}
                alt={m.name}
                fill
                className="object-contain bg-black"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <p className="font-semibold text-lg">{m.name}</p>
              <p className="text-gray-400 text-sm">{m.role}</p>
              <p className="text-white text-xs mt-2 opacity-80">
                click to connect 🔗
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Note */}
      <div className="mt-16 flex justify-center">
        <p className="text-center text-white text-lg md:text-xl font-semibold tracking-wide max-w-2xl">
          🌟 Hover or swipe to meet the faces. Click to connect with the minds. 🌟
        </p>
      </div>

      {/* Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
