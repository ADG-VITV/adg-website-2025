"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub, FaMediumM } from 'react-icons/fa';
import ContactUsHeading from '@/assets/heading2.svg';

const ContactUs: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id='contact-us' className="pt-5 pb-8">
      <div className="absolute right-0 -mt-106 overflow-hidden -z-10 h-[1600px] w-[1400px] lg:h-[1385px] lg:w-[1200px]">
        <Image
          src="/bg-design-4.svg"
          alt="Background Design"
          fill  
          className="object-contain object-right"
          priority
        />
      </div>
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12 md:mb-16">
          <Image
            src={ContactUsHeading}
            alt="Contact Us"
            className="w-full max-w-5xl h-auto ml-0 md:ml-[-4rem] lg:ml-[-8rem]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 max-w-5xl mx-auto mt-4 md:-mt-8">
          <div className="text-center md:text-left md:col-span-1 lg:col-span-1">
            <h3 className="text-4xl font-black text-purple-800 mb-7">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#tech-club-banner"
                  className="text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block"
                  onClick={(e) => handleScroll(e, 'tech-club-banner')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#domains"
                  className="text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block"
                  onClick={(e) => handleScroll(e, 'domains')}
                >
                  Domains
                </Link>
              </li>
              <li>
                <Link
                  href="#our-team"
                  className="text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block"
                  onClick={(e) => handleScroll(e, 'our-team')}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block"
                  onClick={(e) => handleScroll(e, 'events')}
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left md:col-span-1 lg:col-span-1">
            <h3 className="text-4xl font-black text-purple-800 mb-7">Follow Us</h3>
            <div className="grid grid-cols-3 gap-4 justify-items-center md:justify-items-start max-w-xs mx-auto md:mx-0">
              <a href="https://www.facebook.com/iosAppDevelopersGroup/" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaFacebookF size={30} />
              </a>
              <a href="https://www.linkedin.com/company/adgvit/" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaLinkedinIn size={30} />
              </a>
              <a href="https://www.instagram.com/adgvit/" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaInstagram size={30} />
              </a>
              <a href="https://x.com/adgvit" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaTwitter size={30} />
              </a>
              <a href="https://medium.com/@adgvit" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaMediumM size={30} />
              </a>
              <a href="https://github.com/ADG-VITV" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 md:mt-20 pt-8 text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} Made with ❤️ by ADG. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;