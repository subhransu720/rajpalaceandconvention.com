'use client';

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Have questions about our services or want to book an event? We're here to help!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-[#B8860B] mr-3" />
                <span className="text-gray-600">+1 234 567 890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#B8860B] mr-3" />
                <span className="text-gray-600">info@rajpalace.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#B8860B] mr-3" />
                <span className="text-gray-600">123 Palace Street, City, Country</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B8860B] focus:ring-[#B8860B]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B8860B] focus:ring-[#B8860B]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B8860B] focus:ring-[#B8860B]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#B8860B] text-white px-6 py-2 rounded-md hover:bg-[#8B6914] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 