"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import DineImage from '@/assets/events/dine.png';
import DeathImage from '@/assets/events/death.png';
import FigmaImage from '@/assets/events/figma.png';
import ParanormImage from '@/assets/events/paranorm.png';
import SharkImage from '@/assets/events/shark.png';
import iOSImage from '@/assets/events/ios.png';

interface EventProps {
  id: string;
  title: string;
  image: string | any;
  description: string;
  date?: string;
  type: 'upcoming' | 'past';
}

const EventFolder = ({ title, image, description, id, date, type }: EventProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/event/${id}`);
  };

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
      {/* Folder Icon + Title */}
      <div
        className="cursor-pointer flex flex-col items-center"
        onClick={handleClick}
      >
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
        {date && (
          <p className="text-sm font-semibold text-blue-600">{date}</p>
        )}
      </div>

      {/* Hover Preview */}
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
            {/* Header */}
            <div className="p-3 border-b bg-zinc-800">
              <h3 className="text-lg font-semibold tracking-tight text-white flex justify-center">
                {title}
              </h3>
            </div>

            {/* Image */}
            <div className="relative w-full h-40 bg-zinc-800">
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover rounded-none"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-500 text-sm">
                  No image available
                </div>
              )}
            </div>

            {/* Description */}
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
    // Upcoming Events
    {
      id: "upcoming-1",
      title: "React Workshop 2025",
      image: "/bg.png",
      description: "Master modern React development with hands-on projects. Learn hooks, context, and performance optimization techniques.",
      date: "Mar 15, 2025",
      type: "upcoming"
    },
    {
      id: "upcoming-2", 
      title: "Spring Hackathon",
      image: '/bg.png',
      description: "Join our biggest hackathon of the year! 48 hours to build amazing projects and win exciting prizes.",
      date: "Apr 5-7, 2025",
      type: "upcoming"
    },
    {
      id: "upcoming-3",
      title: "Cloud Computing Seminar",
      image: '/bg.png', 
      description: "Explore AWS, Azure, and Google Cloud platforms. Learn deployment strategies and best practices from industry experts.",
      date: "Apr 22, 2025",
      type: "upcoming"
    },
    // Past Events
    {
      id: "past-1",
      title: "Dinner To Die For",
      image: DineImage,
      description: "An inspiring session on emerging technologies and their impact on society. Featured industry experts sharing insights on AI, blockchain, and the future of software development.",
      date: "Feb 20, 2025",
      type: "past"
    },
    {
      id: "past-2", 
      title: "Shark Tech",
      image: SharkImage,
      description: "48-hour coding marathon where students built innovative solutions to real-world problems. Amazing projects were showcased including healthcare apps, sustainability tools, and educational platforms.",
      date: "Feb 5, 2025",
      type: "past"
    },
    {
      id: "past-3",
      title: "Figma Enigma",
      image: FigmaImage, 
      description: "Comprehensive workshop series covering machine learning fundamentals, neural networks, and practical AI applications. Students learned TensorFlow, PyTorch, and deployed their first ML models.",
      date: "Jan 21, 2025",
      type: "past"
    },
    {
      id: "past-4",
      title: "iOS Fusion 7.0",
      image: iOSImage,
      description: "Intensive bootcamp covering modern web development technologies including React, Next.js, and full-stack development. Participants built complete web applications from scratch.",
      date: "Sep 27, 2024",
      type: "past"
    },
    {
      id: "past-5",
      title: "DeathCode",
      image: DeathImage, 
      description: "Deep dive into cybersecurity practices, ethical hacking, and protecting digital assets in the modern world. Featured hands-on penetration testing workshops.",
      date: "Sep 19, 2024",
      type: "past"
    },
    {
      id: "past-6",
      title: "Paranorm",
      image: ParanormImage,
      description: "Celebrating open source contributions and learning how to contribute to major open source projects effectively. Students made their first contributions to popular repositories.",
      date: "Aug 2023",
      type: "past"
    }
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
        <div
          className="max-w-[1323px] w-full rounded-2xl shadow-xl bg-neutral-300 border pb-12 mt-20 sm:mt-0"
        >
          {/* Header */}
          <div className="relative flex items-center mb-15 bg-stone-400 rounded-t-2xl py-1">
            {/* MacOS Buttons */}
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
