"use client"

import react, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import Faq from "./_components/faq";
import AddRating from "./_components/addRating";

export default function Home() {

  return (
    <>
    <main className=" bg-white">

      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ebayimg.com/images/g/ckgAAOSwPYpeVW68/s-l1200.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md glass p-5">
            <h1 className="mb-5 text-xl text-amber-400 md:text-5xl font-bold">The Best Services for your doggos with Woof Company</h1>
            <p className="mb-5 text-l text-amber-200">Supported by pet lovers community around the world and have many professionals on this fields.</p>
            
            <div id="get-started" className=" text-center">
              <Link href="/Services" className="btn btn-outline rounded-full my-10 text-white border-black hover:opacity-50 bg-black">Get Started <FaLocationArrow color="white"  />
               </Link>
            </div>

          </div>
        </div>
      </div>


      <div className="p-5 bg-blue-300 border-y-8 border-blue-500 my-5" id="FAQ-bar">
          <h1 className="text-5xl text-center p-5">FAQ</h1>
          <Faq 
          title={"How to order"} 
          content={"this is content"} />
          <Faq 
          title={"How many days to wait"} c
          ontent={"this is content"} />
          <Faq 
          title={"dog health concern"} 
          content={"this content"} />
          <Faq 
          title={"is there a service for monke?"} 
          content={"this content"} />
          <Faq 
          title={"i love ma dog"} 
          content={"this content"} />
      </div>

      <AddRating/>
      

    </main>

    </>
  );
}
