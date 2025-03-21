'use client';

import { FaCheck, FaBed, FaWifi, FaUtensils, FaParking, FaAccessibleIcon } from 'react-icons/fa';

export default function FacilitiesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-[#8b0000] mb-2">Our Facilities</h2>
          <h3 className="heading-tertiary mb-6">Premium Amenities for Exceptional Events</h3>
          <p className="max-w-3xl mx-auto text-gray-700">
            Raj Palace & Convention offers state-of-the-art facilities and amenities to ensure your event is a remarkable success.
            From spacious event halls to luxury accommodation, we have everything you need for a perfect occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
            <div className="relative h-[250px]">
              <img
                src="/images/IMG_0311.jpg"
                alt="Event Halls"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-1">Elegant Event Halls</h4>
                  <p className="text-[#d4af37]">For Every Occasion</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Our versatile event spaces can accommodate intimate gatherings and grand celebrations alike. With customizable layouts and modern amenities, our halls provide the perfect backdrop for your special occasion.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaCheck className="text-[#9805dc]" />
                  <span className='text-[#9805dc]'>Capacity for up to 500 guests</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheck className="text-[#9805dc]" />
                  <span className='text-[#9805dc]'>State-of-the-art sound and lighting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheck className="text-[#9805dc]" />
                  <span className='text-[#9805dc]'>Customizable floor plans</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
            <div className="relative h-[250px]">
              <img
                src="/images/IMG_0334.jpg"
                alt="Accommodation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-1">Luxury Accommodation</h4>
                  <p className="text-[#d4af37]">Comfort and Elegance</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Our well-appointed rooms and suites offer comfortable and elegant accommodations for your guests. With modern amenities and attentive service, we ensure a pleasant stay for everyone.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaBed className="text-[#d4af37]" />
                  <span className='text-[#9805dc]'>Luxurious rooms and suites</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaWifi className="text-[#d4af37]" />
                  <span className='text-[#9805dc]'>Complimentary high-speed WiFi</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCheck className="text-[#d4af37]" />
                  <span className='text-[#9805dc]'>24-hour concierge service</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
            <div className="relative h-[250px]">
              <img
                src="/images/IMG_0324.jpg"
                alt="Dining"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-1">Premium Amenities</h4>
                  <p className="text-[#d4af37]">Enhancing Your Experience</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                From exceptional dining options to convenient services, our comprehensive amenities ensure a seamless and enjoyable experience for you and your guests at Raj Palace & Convention.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaUtensils className="text-[#d4af37]" />
                  <span className='text-[#9805dc]'>Exquisite catering options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaParking className="text-[#d4af37]" />
                  <span className='text-[#9805dc]'>Ample parking space</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaAccessibleIcon className="text-[#d4af37]" />
                  <span className='text-[#9805dc]'>Accessible facilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 