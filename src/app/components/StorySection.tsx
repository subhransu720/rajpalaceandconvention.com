'use client';

import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export default function StorySection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-secondary text-[#8b0000] mb-2">Our Story</h2>
            <h3 className="heading-tertiary mb-6">A Legacy of Excellence </h3>
            
            <p className="mb-4 text-gray-700">
              Raj Palace & Convention was founded with a vision to create a premier venue for all types of events and celebrations. What started as a small banquet hall has now grown into one of the most prestigious convention centers in the region.
            </p>
            
            <p className="mb-6 text-gray-700">
              With a commitment to excellence, attention to detail, and personalized service, we have become the preferred choice for weddings, corporate events, and social gatherings. Over time, we have expanded our facilities, enhanced our amenities, and continuously modernized to offer an unparalleled experience for our guests.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <FaCheck className="text-[#d4af37]" />
                <span>Founded in 2022 by the family</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="text-[#d4af37]" />
                <span>Expanded to 2 event halls in 2023</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="text-[#d4af37]" />
                <span>Renovated and modernized in 2022</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="text-[#d4af37]" />
                <span>Added luxury accommodation in 2022</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/IMG_0296.jpg"
              alt="Raj Palace History"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 