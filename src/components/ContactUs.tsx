import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

import ContactUsHeading from '@/assets/heading2.svg';

const ContactUs: React.FC = () => {
  return (
    <footer className="pt-5 pb-8">
      <div className="container mx-auto px-6">
        
        <div className="flex justify-center">
          <Image 
            src={ContactUsHeading} 
            alt="Contact Us" 
            className="w-full max-w-5xl h-auto ml-[-4rem] md:ml-[-8rem]"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-20 md:gap-8 max-w-5xl mx-auto -mt-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-black text-purple-400 mb-5">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/domains" className="text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block">
                  Domains
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block">
                  Events
                </Link> 
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-4xl font-black text-purple-400 mb-6">Follow Us</h3>
            <div className="grid grid-cols-3 gap-4 justify-items-center md:justify-items-start">
              <a href="#" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaFacebookF size={30} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaLinkedinIn size={30} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaInstagram size={30} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <SiVercel size={30} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 md:mt-20 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Made with ❤️ by ADG. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default ContactUs;