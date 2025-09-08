import React from 'react';
import Image from 'next/image';

import DomainsHeading from '@/assets/heading.svg';
import UiUxIcon from '@/assets/d1.svg';
import IosIcon from '@/assets/d2.svg';
import WebDevIcon from '@/assets/d3.svg';
import SecurityIcon from '@/assets/d4.svg';
import AndroidIcon from '@/assets/d5.svg';
import AiIcon from '@/assets/d6.svg';
import BusinessIcon from '@/assets/d7.svg';
import EventsIcon from '@/assets/d8.svg';

interface Domain {
  name: string;
  icon: any;
}

const domains: Domain[] = [
  { name: 'UI/UX Design', icon: UiUxIcon },
  { name: 'iOS Development', icon: IosIcon },
  { name: 'Web Development', icon: WebDevIcon },
  { name: 'Cyber Security', icon: SecurityIcon },
  { name: 'Android Development', icon: AndroidIcon },
  { name: 'AI & Machine Learning', icon: AiIcon },
  { name: 'Business Development', icon: BusinessIcon },
  { name: 'Event Management', icon: EventsIcon },
];

const DomainsSection: React.FC = () => {
  return (
    <section id='domains' className="py-20 sm:py-28">
      <div className="absolute right-0 overflow-hidden -z-10 h-[1350px] w-[1400px] lg:h-[1710px] lg:w-[1760px]">
        <Image
          src="/bg-design-2.svg"
          alt="Background Design"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="container mx-auto px-6 z-10">
        
        <div className="flex justify-center mb-12 md:mb-16">
          <Image 
            src={DomainsHeading} 
            alt="Domains Heading" 
            className="w-full max-w-2xl h-auto" 
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 max-w-5xl mx-auto">
          {domains.map((domain) => (
            <div
              key={domain.name}
              className="group aspect-square p-0 sm:p-2 md:p-3 lg:p-3 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={domain.icon}
                alt={`${domain.name} icon`}
                className="w-2/3 h-2/3 sm:w-3/4 sm:h-3/4 md:w-7/8 md:h-7/8 lg:w-9/10 lg:h-9/10 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;