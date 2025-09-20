"use client";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section id="tech-club-banner" className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
      
      {/* Decorative Wave Layer (No changes here) */}
      <div className="hidden md:block absolute top-0 left-0 h-full w-auto max-w-[45%] z-10">
        <Image
          src="/bg-design-1.png"
          alt="Decorative Background Pattern"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          priority
        />
      </div>

      {/* Main content container */}
      <div className="relative z-20 flex w-full max-w-screen-2xl mx-auto px-4 md:px-8 flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left SVG container: Takes full width on mobile, half on large screens */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/left_hero.svg"
            alt="ADG VIT Hero Graphic"
            width={612}
            height={1009}
            // Removed max-w-xl to allow the image to grow larger
            className="w-full h-auto"
            priority 
          />
        </div>

        {/* Right SVG container: Takes full width on mobile, half on large screens */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/right_hero.svg"
            alt="Hero Graphic Grid"
            width={708}
            height={776}
            // Applied h-auto for consistent, proportional scaling
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;