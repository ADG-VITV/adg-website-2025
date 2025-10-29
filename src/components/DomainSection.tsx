import React from 'react';
import Image from 'next/image';
import DomainsHeading from '@/assets/heading.svg';
import UiUxIcon from '@/assets/domains/d1.png';
import IosIcon from '@/assets/domains/d2.png';
import WebDevIcon from '@/assets/domains/d3.png';
import SecurityIcon from '@/assets/domains/d4.png';
import AndroidIcon from '@/assets/domains/d5.png';
import AiIcon from '@/assets/domains/d6.png';
import BusinessIcon from '@/assets/domains/d7.png';
import EventsIcon from '@/assets/domains/d8.png';

interface Domain {
  name: string;
  icon: any;
}

const domains: Domain[] = [
  { name: 'Design', icon: UiUxIcon },
  { name: 'iOS Development', icon: IosIcon },
  { name: 'Web Development', icon: WebDevIcon },
  { name: 'Blockchain', icon: SecurityIcon },
  { name: 'Android Development', icon: AndroidIcon },
  { name: 'Machine Learning', icon: AiIcon },
  { name: 'Finance', icon: BusinessIcon },
  { name: 'Event Management', icon: EventsIcon },
];

const DomainsSection: React.FC = () => {
  return (
    <section id='domains' className="py-20 sm:py-28 relative">
      {/* Background design */}
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
        {/* Section Heading */}
        <div className="flex justify-center mb-12 md:mb-16">
          <Image
            src={DomainsHeading}
            alt="Domains Heading"
            className="w-full max-w-2xl h-auto"
          />
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 max-w-5xl mx-auto">
          {domains.map((domain) => (
            <div
              key={domain.name}
              className="group flex flex-col items-center justify-center p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-lg shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <Image
                src={domain.icon}
                alt={`${domain.name} icon`}
                width={120}
                height={120}
                className="object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                priority
              />

              {/* Domain Name */}
              <p className="text-center text-white text-lg font-semibold tracking-wide group-hover:text-neutral-200 transition-colors">
                {domain.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
