"use client";
import React from "react";
import Image from "next/image";

// Final Hero Component using the Image 'src' method
const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
      {/* 1. Background Image Layer */}


      {/* 2. Decorative Wave Layer */}
      <div className="absolute top-0 left-0 h-full w-auto max-w-[45%] z-10">
        <Image
          src="/bg-design-1.png"
          alt="Decorative Background Pattern"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          priority
        />
      </div>

      <div className="relative z-20 flex w-full max-w-screen-2xl mx-auto px-4 md:px-8 flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="w-full md:w-1/2 flex justify-center h-fit">
          <Image
            src="/left_hero.svg"
            alt="ADG VIT Hero Graphic"
            width={612}
            height={1009}
            className="w-full max-w-xl h-auto"
            priority 
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center ">
          <Image
            src="/right_hero.svg"
            alt="Hero Graphic Grid"
            width={708}
            height={776}
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;