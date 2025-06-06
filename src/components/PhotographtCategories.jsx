import React, { useRef } from "react";
import AnimatedService from "./AnimatedService";
// import { motion, useScroll, useTransform } from 'framer-motion'

const PhotographtCategories = () => {
  const services = [
    "Corporate team photography",
    "Event photography",
    "Wedding Shoots",
    "Photo Editing, Color correction and retouching",
    "Lifestyle Photography",
    "Location and Architectural photography",
    "Indoor & Outdoor Photography",
  ];

  const containerRef = useRef(null)

  // Custom hooks for sphere animation

  return (
    <div 
    ref={containerRef}
    className="flex flex-col items-center bg-black min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-slate-100 font-edu mt-11">Photography Categories</h2>
        <div>
            {services.map((service) => (
                <AnimatedService 
                key={service}
                service={service}
                containerRef={containerRef}
                />
            ))}
        </div>
    </div>
  )
};

export default PhotographtCategories;
