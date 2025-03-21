'use client';

import Link from 'next/link';
import Image from 'next/image';

const galleryImages = [
  { 
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', 
    alt: 'Wedding Ceremony' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop', 
    alt: 'Corporate Event' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1511795409834-432f31147b22?q=80&w=2070&auto=format&fit=crop', 
    alt: 'Social Gathering' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', 
    alt: 'Conference Room' 
  }
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-[300px] group overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/gallery" 
            className="inline-block bg-[#B8860B] text-white px-6 py-2 rounded-md hover:bg-[#8B6914] transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
} 