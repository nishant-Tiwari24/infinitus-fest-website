import Competition from '@/components/main/Competition'
import Events from '@/components/main/Event'
import Footer from '@/components/main/Footer'
import Navbar from '@/components/main/Navbar'
import StarsCanvas from '@/components/main/StarCanvas'
import React from 'react'

function page() {
  const backgroundImageUrl = '/images/img-backgroun.png';
  return (
    <div className="flex flex-col h-[950px] gap-20 bg-contain bg-fixed" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <StarsCanvas/>
      <Competition types='Technical Fest'/>
    </div>
  )
}

export default page