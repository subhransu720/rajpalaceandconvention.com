'use client';

import { FaUsers, FaCalendarAlt, FaMedal, FaHandshake } from 'react-icons/fa';

export default function MissionSection() {
  return (
    <section className="section-padding bg-[#f8f0e3]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-[#8b0000] mb-2">Our Mission & Values</h2>
          <h3 className="heading-tertiary text-[#090381] mb-6">What Drives Us Every Day</h3>
          <p className="max-w-3xl mx-auto text-[#8b0000]">
            At Raj Palace & Convention, we are guided by our commitment to excellence and customer satisfaction.
            Our mission and values define who we are and how we operate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#d4af37]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-2xl text-[#d4af37]" />
            </div>
            <h4 className="text-xl text-[#090381] font-bold mb-2">Customer First</h4>
            <p className="text-gray-600">
              We prioritize our customers' needs and strive to exceed their expectations in every interaction.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#d4af37]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMedal className="text-2xl text-[#d4af37]" />
            </div>
            <h4 className="text-xl text-[#090381] font-bold mb-2">Excellence</h4>
            <p className="text-gray-600">
              We are committed to delivering excellence in every aspect of our service and facilities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#d4af37]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandshake className="text-2xl text-[#d4af37]" />
            </div>
            <h4 className="text-xl text-[#090381] font-bold mb-2">Integrity</h4>
            <p className="text-gray-600">
              We conduct our business with honesty, transparency, and ethical practices.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#d4af37]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendarAlt className="text-2xl text-[#d4af37]" />
            </div>
            <h4 className="text-xl text-[#090381] font-bold mb-2">Innovation</h4>
            <p className="text-gray-600">
              We continuously innovate and improve our services to stay ahead in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 