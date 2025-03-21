import React from 'react';

const services = [
  "Wedding Ceremonies",
  "Corporate Events",
  "Birthday Celebrations",
  "Anniversary Parties",
  "Conference Facilities",
  "Catering Services",
  "Decoration Services",
  "Sound & Lighting"
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">{service}</h2>
            <p className="text-gray-600">
              Experience excellence with our professional {service.toLowerCase()} services.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
} 