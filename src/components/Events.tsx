"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import DineImage from "@/assets/events/dine.png";
import DeathImage from "@/assets/events/death.png";
import FigmaImage from "@/assets/events/figma.png";
import ParanormImage from "@/assets/events/paranorm.png";
import SharkImage from "@/assets/events/shark.png";
import iOSImage from "@/assets/events/ios.png";
import iOSImage2 from "@/assets/events/ios.jpeg";

interface EventProps {
  id: string;
  title: string;
  image: string | any;
  description: string;
  date?: string;
  type: "upcoming" | "past";
}

const EventFolder = ({ title, image, description, id, date, type }: EventProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const previewWidth = Math.min(340, viewportWidth * 0.9);
      setOpenLeft(rect.right + previewWidth > viewportWidth);
    }
    setIsHovered(true);
  };

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cursor-pointer flex flex-col items-center">
        <div className="relative">
          <Image
            src="/folder.svg"
            alt={title}
            width={164}
            height={144}
            className="transition-transform duration-200 hover:scale-105"
          />
          <div
            className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded-md ${
              type === "upcoming" ? "bg-blue-500/90" : "bg-gray-500/90"
            }`}
          >
            {type === "upcoming" ? "UPCOMING" : "PAST"}
          </div>
        </div>
        <p className="text-sm text-center font-semibold text-black">{title}</p>
        {date && <p className="text-sm font-semibold text-blue-600">{date}</p>}
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`absolute z-20 w-[90vw] sm:w-72 md:w-80 rounded-2xl shadow-xl
              backdrop-blur-2xl border overflow-hidden pointer-events-none bg-zinc-800 -top-10
              ${openLeft ? "right-40" : "left-40"}`}
          >
            <div className="p-3 border-b bg-zinc-800">
              <h3 className="text-lg font-semibold tracking-tight text-white flex justify-center">
                {title}
              </h3>
            </div>

            <div className="relative w-full h-40 bg-zinc-800">
              {image ? (
                <Image src={image} alt={title} fill className="object-cover rounded-none" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-500 text-sm">
                  No image available
                </div>
              )}
            </div>

            <div className="p-4">
              <p className="text-sm leading-relaxed text-white">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Events = () => {
  const events: EventProps[] = [
    {
      id: "coming-soon-2",
      title: "Coming Soon...",
      image: "/folder.svg",
      description:
        "Stay tuned! More exciting events are on the way. Keep an eye on this space for announcements.",
      type: "upcoming",
    },

    // Past Events
    {
      id: "past-0",
      title: "iOS Fusion 8.0",
      image: iOSImage2,
      description:
        "Our flagship event of 2025 — an advanced workshop on Swift and Machine Learning for iOS development, followed by an Appathon where participants built innovative mobile applications.",
      date: "Sept 26, 2025",
      type: "past",
    },
    {
      id: "past-1",
      title: "Dinner To Die For",
      image: DineImage,
      description:
        "An interactive murder mystery event combining creativity, logic, and teamwork. Participants enjoyed a thrilling experience while decoding clues and solving mysteries over dinner.",
      date: "Feb 20, 2025",
      type: "past",
    },
    {
      id: "past-2",
      title: "Shark Tech",
      image: SharkImage,
      description:
        "A small workshop on converting Figma designs into web interfaces, followed by an exciting hackathon during Yantra where participants built real-world projects using their designs.",
      date: "Feb 5, 2025",
      type: "past",
    },
    {
      id: "past-3",
      title: "Figma Enigma",
      image: FigmaImage,
      description:
        "A hands-on workshop focused on Figma — from the basics of UI/UX design to prototyping professional layouts used in modern web and app design.",
      date: "Jan 21, 2025",
      type: "past",
    },
    {
      id: "past-4",
      title: "iOS Fusion 7.0",
      image: iOSImage,
      description:
        "ADG’s flagship event of 2024 — a comprehensive Swift workshop for iOS development, followed by an Appathon where developers created and showcased fully functional apps.",
      date: "Sep 27, 2024",
      type: "past",
    },
    {
      id: "past-5",
      title: "DeathCode",
      image: DeathImage,
      description:
        "A high-energy workshop where participants built a Crunchyroll clone using Tailwind CSS and Next.js, learning modern frontend workflows and best practices hands-on.",
      date: "Sep 19, 2024",
      type: "past",
    },
    {
      id: "past-6",
      title: "ParanorML",
      image: ParanormImage,
      description:
        "A machine learning workshop introducing the fundamentals of ML followed by an engaging hackathon where participants applied their skills to real-world problem statements.",
      date: "Aug 2023",
      type: "past",
    },
  ];

  return (
    <div id="events">
      <div className="flex justify-center mt-20 mb-6 md:mb-16">
        <Image
          src="/eventsHeading.svg"
          alt="Events Heading"
          width={600}
          height={140}
          className="w-full max-w-2xl h-auto"
        />
      </div>

      <section className="w-full min-h-screen flex justify-center items-center mt-5 px-5 z-10">
        <div className="max-w-[1323px] w-full rounded-2xl shadow-xl bg-neutral-300 border pb-12 mt-20 sm:mt-0">
          {/* Header */}
          <div className="relative flex items-center mb-15 bg-stone-400 rounded-t-2xl py-1">
            <div className="absolute top-2 flex space-x-2 justify-start pl-2">
              <div className="w-[29px] h-[29px] rounded-full bg-red-500"></div>
              <div className="w-[29px] h-[29px] rounded-full bg-gray-300"></div>
              <div className="w-[29px] h-[29px] rounded-full bg-green-500"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center mx-auto justify-center">
              EVENTS
            </h2>
          </div>

          {/* Folder Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-20 justify-items-center">
            {events.map((event) => (
              <EventFolder key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
