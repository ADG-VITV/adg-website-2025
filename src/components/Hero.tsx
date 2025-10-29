"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface HeroProps {
  onHeroLoaded?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onHeroLoaded }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const fallback = setTimeout(() => {
      if (onHeroLoaded) onHeroLoaded();
    }, 3000);

    if (imagesLoaded >= 2 && onHeroLoaded) {
      onHeroLoaded();
    }

    return () => clearTimeout(fallback);
  }, [imagesLoaded, onHeroLoaded]);

  return (
    <section
      id="tech-club-banner"
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-90px)] w-full overflow-hidden pt-24 lg:pt-0"
    >
      {/* Background */}
      <div className="hidden md:block absolute top-0 left-0 h-full w-auto max-w-[45%] z-0">
        <Image
          src="/bg-design-1.png"
          alt="Decorative Background Pattern"
          fill
          className="object-contain object-left opacity-90"
          priority
        />
      </div>

      {/* Hero layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1350px] mx-auto px-6 md:px-10 gap-10">
        {/* Left Hero Image */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <div className="relative w-[85%] sm:w-[75%] md:w-[70%] lg:w-[80%] max-w-[560px] aspect-[4/5]">
            <Image
              src="/adgvit.png"
              alt="ADG VIT Hero Graphic"
              fill
              className="object-contain scale-[1.1] md:scale-[1.15] lg:scale-[1.2]"
              priority
              onLoadingComplete={() => setImagesLoaded((prev) => prev + 1)}
              onError={() => setImagesLoaded((prev) => prev + 1)}
            />

          </div>
        </div>

        {/* Right Hero Image */}
        <div className="flex justify-center items-center w-full lg:w-1/2 lg:p-16">
          <div className="relative w-[85%] sm:w-[75%] md:w-[70%] lg:w-[80%] max-w-[520px] aspect-[4/4.7]">
            <Image
              src="/adg/widgets.png"
              alt="ADG Gallery Grid"
              fill
              className="object-contain scale-[1.05] md:scale-[1.1] lg:scale-[1.15]"
              priority
              onLoadingComplete={() => setImagesLoaded((prev) => prev + 1)}
              onError={() => setImagesLoaded((prev) => prev + 1)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
