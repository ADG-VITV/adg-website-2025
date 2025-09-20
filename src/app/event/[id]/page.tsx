'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface EventData {
  id: string;
  title: string;
  image: string;
  description: string;
  date?: string;
  location?: string;
  duration?: string;
  category?: string;
  price?: string;
  type: 'upcoming' | 'past';
}

const eventData: Record<string, EventData> = {
  // Upcoming Events
  'upcoming-1': {
    id: 'upcoming-1',
    title: 'React Workshop 2025',
    image: '/bg.png',
    description: 'Master modern React development with hands-on projects. Learn hooks, context, and performance optimization techniques.',
    date: 'March 15, 2025',
    location: 'Tech Lab, VIT',
    duration: '10:00 AM - 4:00 PM',
    category: 'Workshop',
    price: 'Free',
    type: 'upcoming'
  },
  'upcoming-2': {
    id: 'upcoming-2',
    title: 'Spring Hackathon',
    image: '/bg.png',
    description: 'Join our biggest hackathon of the year! 48 hours to build amazing projects and win exciting prizes.',
    date: 'April 5-7, 2025',
    location: 'Main Campus, VIT',
    duration: '48 hours',
    category: 'Competition',
    price: 'Free',
    type: 'upcoming'
  },
  'upcoming-3': {
    id: 'upcoming-3',
    title: 'Cloud Computing Seminar',
    image: '/bg.png',
    description: 'Explore AWS, Azure, and Google Cloud platforms. Learn deployment strategies and best practices from industry experts.',
    date: 'April 22, 2025',
    location: 'Auditorium, VIT',
    duration: '2:00 PM - 5:00 PM',
    category: 'Seminar',
    price: 'Free',
    type: 'upcoming'
  },
  // Past Events
  'past-1': {
    id: 'past-1',
    title: 'Tech Talk 2024',
    image: '/bg.png',
    description: 'An inspiring session on emerging technologies and their impact on society. Featured industry experts sharing insights on AI, blockchain, and the future of software development.',
    date: 'January 2024',
    location: 'Main Auditorium, VIT',
    duration: '3 hours',
    category: 'Tech Talk',
    price: 'Free',
    type: 'past'
  },
  'past-2': {
    id: 'past-2',
    title: 'Hackathon Winter',
    image: '/bg.png',
    description: '48-hour coding marathon where students built innovative solutions to real-world problems. Amazing projects were showcased including healthcare apps, sustainability tools, and educational platforms.',
    date: 'December 2023',
    location: 'Tech Campus, VIT',
    duration: '48 hours',
    category: 'Hackathon',
    price: 'Free',
    type: 'past'
  },
  'past-3': {
    id: 'past-3',
    title: 'AI Workshop Series',
    image: '/bg.png',
    description: 'Comprehensive workshop series covering machine learning fundamentals, neural networks, and practical AI applications. Students learned TensorFlow, PyTorch, and deployed their first ML models.',
    date: 'November 2023',
    location: 'Computer Lab, VIT',
    duration: '5 days',
    category: 'Workshop Series',
    price: 'Free',
    type: 'past'
  },
  'past-4': {
    id: 'past-4',
    title: 'Web Dev Bootcamp',
    image: '/bg.png',
    description: 'Intensive bootcamp covering modern web development technologies including React, Next.js, and full-stack development. Participants built complete web applications from scratch.',
    date: 'October 2023',
    location: 'Lab Complex, VIT',
    duration: '1 week',
    category: 'Bootcamp',
    price: 'Free',
    type: 'past'
  },
  'past-5': {
    id: 'past-5',
    title: 'Cybersecurity Summit',
    image: '/bg.png',
    description: 'Deep dive into cybersecurity practices, ethical hacking, and protecting digital assets in the modern world. Featured hands-on penetration testing workshops.',
    date: 'September 2023',
    location: 'Security Lab, VIT',
    duration: '2 days',
    category: 'Summit',
    price: 'Free',
    type: 'past'
  },
  'past-6': {
    id: 'past-6',
    title: 'Open Source Day',
    image: '/bg.png',
    description: 'Celebrating open source contributions and learning how to contribute to major open source projects effectively. Students made their first contributions to popular repositories.',
    date: 'August 2023',
    location: 'Open Lab, VIT',
    duration: '1 day',
    category: 'Community Event',
    price: 'Free',
    type: 'past'
  }
};

export default function EventDetail() {
  const params = useParams();
  const router = useRouter();
  const eventId = params.id as string;
  const event = eventData[eventId];

  // Default event if not found (optional fallback)
  const defaultEvent = event || {
    id: 'default',
    title: 'Event Details',
    image: '/bg.png',
    description: 'Event information will be updated soon.',
    date: 'TBD',
    location: 'VIT Campus',
    duration: 'TBD',
    category: 'General',
    price: 'Free',
    type: 'upcoming' as const
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background with Gradients and Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-500">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-500/20 rounded-full blur-lg animate-bounce"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')] opacity-30"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="relative z-10"
      >
        <div className="max-w-6xl mx-auto py-12 px-6">
          {/* Header */}
          <div className="mb-12">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => router.back()}
              className="mb-6 px-6 py-3 bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-all duration-300 flex items-center rounded-xl border border-white/20 hover:border-white/40 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Events
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {defaultEvent.title}
              </h1>
              {defaultEvent.type === 'upcoming' && (
                <div className="mb-4">
                  <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/80 to-orange-500/80 backdrop-blur-sm text-white rounded-full text-lg font-bold border border-white/20 animate-pulse">
                    🚀 Coming Soon...
                  </span>
                </div>
              )}
              {defaultEvent.category && (
                <span className={`inline-block px-4 py-2 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-white/20 ${
                  defaultEvent.type === 'upcoming' 
                    ? 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80'
                    : 'bg-gradient-to-r from-gray-600/80 to-gray-700/80'
                }`}>
                  {defaultEvent.category} {defaultEvent.type === 'past' ? '(Past Event)' : ''}
                </span>
              )}
              {defaultEvent.date && (
                <p className="text-white/90 text-xl font-medium">{defaultEvent.date}</p>
              )}
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Event Image and Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Event Image */}
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-semibold">No image available</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  About This Event
                </h2>
                <p className="text-white/90 leading-relaxed text-lg">
                  {event.description}
                </p>
              </div>
            </motion.div>

            {/* Event Details Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Event Details</h3>
                <div className="space-y-4">
                  {event.date && (
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-white/90 block">Date</span>
                        <p className="text-white/80">{event.date}</p>
                      </div>
                    </div>
                  )}
                  
                  {event.duration && (
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-white/90 block">Duration</span>
                        <p className="text-white/80">{event.duration}</p>
                      </div>
                    </div>
                  )}
                  
                  {event.location && (
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-white/90 block">Location</span>
                        <p className="text-white/80">{event.location}</p>
                      </div>
                    </div>
                  )}

                  {event.price && (
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-white/90 block">Price</span>
                        <p className="text-white/80">{event.price}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
