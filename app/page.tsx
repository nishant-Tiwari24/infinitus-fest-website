'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/main/Hero';
import Navbar from '@/components/main/Navbar';
const StarsCanvas = dynamic(() => import('@/components/main/StarCanvas'), { ssr: false });
import Gallery from '@/components/main/Gallery';
import CategoryList from '@/components/main/Category';
import About from '@/components/main/About';
import PastPerformers from '@/components/main/PastPerformers';
import Proshows from '@/components/main/Proshows';
import Image from 'next/image';
import Footer from '@/components/main/Footer';
import Timer from '@/components/sub/Timer';
import FlareCursor from "@/components/main/Cursor";

const Home: React.FC = () => {

  return (
    <main>
      <div className="container1">
      <FlareCursor />
      <StarsCanvas />
      <Hero />
      <Gallery />
      <About />
      <PastPerformers />
      <Proshows /> 
      <Footer />
      <Navbar />
      </div>
    </main>
  );
};

export default Home;
