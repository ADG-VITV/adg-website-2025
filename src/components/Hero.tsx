"use client";
import Image from "next/image";

const TechClubBanner: React.FC = () => {
  return (
    <div id="tech-club-banner" className="relative">

      <div className="flex flex-col md:flex-row justify-between -mt-5">
        <div className="absolute -z-10">
          <Image
            src="/bg-design-1.png"
            alt="Decorative Background Pattern"
            height={1000}
            width={684}
            priority
          />
        </div>
        <div className="flex">
          <div className="md:-ml-40 md:-mt-15  max-w-[500px] md:max-w-[900px] z-10">
            <Image
              src="/adgvit.png"
              alt="ADGVIT Club Logo"
              height={1000}
              width={900}
            />
          </div>
          <div className="flex justify-between items-center -mt-190 -ml-78 w-[310px] gap-4 relative z-50">
            {[
                { src: "/instagram.svg", alt: "Instagram Social Link", url: "https://www.instagram.com/adgvit/" },
                { src: "/linkedIn.svg", alt: "LinkedIn Social Link", url: "https://www.linkedin.com/company/adgvit/" },
                { src: "/github.svg", alt: "GitHub Social Link", url: "https://github.com/adgvit" },
                { src: "/medium.svg", alt: "Medium Social Link", url: "https://medium.com/@adgvit" },
            ].map((social) => (
                <div
                key={social.src}
                onClick={() => window.open(social.url, "_blank")}
                className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:animate-bounce"
                >
                <Image
                    src={social.src}
                    alt={social.alt}
                    height={55}
                    width={55}
                />
                </div>
            ))}
            </div>


          <div className="relative mt-[940px] -ml-150 z-10">
            <Image
              src="/code.png"
              alt="Code Illustration"
              height={450}
              width={254}
              
            />
          </div>
          <div className="text-5xl font-mona font-bold mt-[945px] ml-13 text-white drop-shadow-[0_4px_4px_rgba(147,51,234,0.5)] z-10">
            TECH CLUB
          </div>
          <div className="text-5xl font-mona font-bold mt-[1015px] -ml-73 text-white drop-shadow-[0_4px_4px_rgba(147,51,234,0.5)] z-10">
            VELLORE, TN
          </div>
        </div>
        <div className="flex flex-col mt-34 mr-10 z-10">
          <div className="flex justify-between gap-5 items-start">
            {[
              { src: "/blank1.png", alt: "Club Image 1", height: 230, width: 250 },
              { src: "/blank1.png", alt: "Club Image 2", height: 230, width: 250 },
              { src: "/blank2.png", alt: "Club Image 3", height: 285, width: 300 },
            ].map((img, index) => (
              <Image
                key={`top-${index}`}
                src={img.src}
                alt={img.alt}
                height={img.height}
                width={img.width}                
              />
            ))}
          </div>
          <div className="flex justify-between gap-5 items-start pt-5">
            <Image
              src="/blank3.png"
              alt="Club Image 4"
              height={230}
              width={515}
              className="-mt-20"
              
            />
            <Image
              src="/blank4.png"
              alt="Club Image 5"
              height={200}
              width={300}
              className="mt-20"             
            />
          </div>
          <div className="flex justify-between gap-5 items-start -mt-20">
            <Image
              src="/blank3.png"
              alt="Club Image 6"
              height={230}
              width={515}
            />
          </div>
          <div className="flex justify-between gap-5 items-start pt-5">
            {[
              { src: "/blank1.png", alt: "Club Image 7", height: 230, width: 250 },
              { src: "/logo.svg", alt: "Club Logo", height: 200, width: 200 },
              { src: "/blank2.png", alt: "Club Image 8", height: 285, width: 300, className: "-mt-22" },
            ].map((img, index) => (
              <Image
                key={`bottom-${index}`}
                src={img.src}
                alt={img.alt}
                height={img.height}
                width={img.width}
                className={img.className}  
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechClubBanner;