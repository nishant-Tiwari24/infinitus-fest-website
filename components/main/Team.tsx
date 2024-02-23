import React from "react";
import Image from 'next/image';
import Navbar from '@/components/main/Navbar';
import Footer from "./Footer";

const teamMembers = [
  { id: 1, name: "V. Preetam",designation:"President", imageSrc: "/images/preetam.jpeg" },
  { id: 2, name: "Niruktha V",designation:"Vice President", imageSrc: "/images/nirukhta.jpeg" },
  { id: 3, name: "Sanjana Maini",designation:"Gen Secretary", imageSrc: "/images/gallery-6.jpg" },
  { id: 4, name: "BVS Laxman",designation:"Treasure", imageSrc: "/images/laxman.jpeg" },
  { id: 5, name: "D. Chandra Sai",designation:"Events", imageSrc: "/images/chandu1.jpeg" },
  { id: 6, name: "Achyut Katiyar",designation:"Technical", imageSrc: "/images/achyut.jpeg" },
  { id: 7, name: "Gnanesh",designation:"Discipline", imageSrc: "/images/gnanesh.jpeg" },
  { id: 8, name: "Ayush Singh",designation:"Academics", imageSrc: "/images/yushh.jpeg" },
  { id: 9, name: "Nivedha Sriram",designation:"Clubs", imageSrc: "/images/nivedha.jpeg" },
  { id: 10, name: "Prachi Dash",designation:"Writers Co", imageSrc: "/images/prachi.jpeg" },
  { id: 11, name: "Rohan Midella",designation:"Public Relations", imageSrc: "/images/rohan.jpeg" },
];

const TeamMemberSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-8 md:px-12 lg:px-20 max-w-screen">
        <div className="max-w-full mx-auto text-center">
          <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space m-20 sm:m-10'>
            Infinitus Executive Committee
          </h1>
        </div>
        <div className="grid max-w-full items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 object-cover mt-8 sm:mt-12 md:mt-16 lg:gap-x-8">
          {teamMembers.map(member => (
            <div key={member.id} className="w-full mb-8">
              <div className="relative rounded-md flex items-center ">
                <Image
                  className="object-cover object-center px-10 h-[500px] w-[500px]"
                  src={member.imageSrc}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex justify-between align-middle px-10">
                <p className="mt-2 text-3xl text-center text-gray-200 font-space ">{member.name}</p>
                <p className="mt-2 text-3xl text-center text-green-200 italic ">{member.designation}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        <h1 className='text-center text-4xl sm:text-7xl pt-24 font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space m-6 sm:m-10'>
            Meet Our Amazing Team
      </h1>
      <div className="flex justify-center pb-20 items-center">
      <Image
        width={1200}
        height={800} src={"/images/groupteam.jpeg"} alt={"team"} className="z-50"/>
        </div>
      <Navbar />
      <Footer/>
    </section>
  );
};

export default TeamMemberSection;
