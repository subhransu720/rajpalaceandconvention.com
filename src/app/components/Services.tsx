'use client';

import Link from 'next/link';

const services = [
  {
    title: 'Wedding Ceremonies',
    description: 'Make your special day unforgettable with our elegant wedding venues and services.',
    icon: '💑'
  },
  {
    title: 'Corporate Events',
    description: 'Professional spaces equipped with modern technology for your business needs.',
    icon: '🏢'
  },
  {
    title: 'Social Gatherings',
    description: 'Perfect venues for celebrations, parties, and social events of all sizes.',
    icon: '🎉'
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href="/services" 
                className="text-[#B8860B] hover:text-[#8B6914] transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/services" 
            className="inline-block bg-[#B8860B] text-white px-6 py-2 rounded-md hover:bg-[#8B6914] transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
} 