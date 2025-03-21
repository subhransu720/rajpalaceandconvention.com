'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Raj Palace & Convention</h2>
            <p className="text-gray-600 mb-6">
              Raj Palace & Convention is a premier event venue that combines elegance with modern amenities. 
              Our state-of-the-art facilities and dedicated team ensure that every event is executed to perfection.
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-[#B8860B] text-white px-6 py-2 rounded-md hover:bg-[#8B6914] transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1600185365487-76b8b68311af?q=80&w=2070&auto=format&fit=crop"
              alt="Raj Palace & Convention"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 