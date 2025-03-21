'use client';

import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    alt: 'Wedding Ceremony',
    category: 'Weddings'
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    alt: 'Corporate Event',
    category: 'Corporate'
  },
  {
    src: 'https://images.unsplash.com/photo-1511795409834-432f31147b22?q=80&w=2070&auto=format&fit=crop',
    alt: 'Social Gathering',
    category: 'Social'
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    alt: 'Conference Room',
    category: 'Corporate'
  },
  {
    src: 'https://images.unsplash.com/photo-1511795409834-432f31147b22?q=80&w=2070&auto=format&fit=crop',
    alt: 'Birthday Celebration',
    category: 'Social'
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    alt: 'Wedding Reception',
    category: 'Weddings'
  }
];

const categories = ['All', 'Weddings', 'Corporate', 'Social'];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Gallery</h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[400px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </h3>
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 