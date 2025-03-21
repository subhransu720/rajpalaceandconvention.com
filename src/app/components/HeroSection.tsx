'use client';

export default function HeroSection() {
  return (
    <div className="relative h-[50vh] md:h-[60vh] w-full">
      <img
        src="/images/IMG_0341.jpg"
        alt="About Raj Palace"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="heading-primary mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto px-4">
            Learn about our journey, mission, and commitment to excellence
          </p>
        </div>
      </div>
    </div>
  );
} 