import Events from '@/components/main/Event'
import Footer from '@/components/main/Footer'
import Navbar from '@/components/main/Navbar'
import StarsCanvas from '@/components/main/StarCanvas'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col h-[950px] gap-20 bg-cover bg-fixed">
        <Navbar/>
      <StarsCanvas/>
    </div>
  )
}

export default page