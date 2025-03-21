'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import MissionSection from '../components/MissionSection';
import FacilitiesSection from '../components/FacilitiesSection';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StorySection />
      <MissionSection />
      <FacilitiesSection />
      <Footer />
    </main>
  );
}