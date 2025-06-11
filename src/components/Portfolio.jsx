import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

const images = [
  "/iso-republic-africa-elephant.jpg",
  "/iso-republic-alaskan-lake.jpg",
  "/iso-republic-apples-market.jpg",
  "/iso-republic-autumn-foliage-fallen-leaves.jpeg",
  "/iso-republic-black-woman-smile.jpg",
  "/iso-republic-car-on-road.jpg",
  "/iso-republic-car-on-road(1).jpg",
  "/iso-republic-dog-portrait-4.jpg",
  "/iso-republic-girl-hat-smile.jpg",
  "/iso-republic-hip-hop-model.jpg",
  "/iso-republic-iron-grey-council-blocks-against-a-metallic-sky.jpg",
  "/iso-republic-lavender-field.jpg",
  "/iso-republic-macro-paper-money-010.jpg",
  "/iso-republic-male-surfer-silhouette.jpg",
  "/iso-republic-mens-rustic-wedding-band-close-up.jpg",
  "/iso-republic-monochrome-horse-portrait.jpg",
  "/iso-republic-motherhood-0399.jpg",
  "/iso-republic-nature-path.jpg",
  "/iso-republic-night-full-moon.jpg",
  "/iso-republic-people-beach-silhouette.jpg",
  "/iso-republic-rainbow_birds.jpg",
  "/iso-republic-round-building-exterior.jpg",
  "/iso-republic-scenic-peak-mountain.jpg",
  "/iso-republic-statue-building-ornate.jpg",
  "/iso-republic-tall-building-silouette.jpg",
  "/iso-republic-urban-art-grafitti.jpg",
  "/iso-republic-walking-covered-bridge.jpg",
  "/iso-republic-young-professional-man-07.jpg",
  "/outdoor-wedding.jpg",
  "/wedding-dress.jpg",
];

const directions = [
  { x: -80, y: 40 },
  { x: 80, y: 40 },
  { x: -40, y: -80 },
  { x: 40, y: -80 },
  { x: 0, y: 80 },
  { x: 0, y: -80 },
];

// 🧱 Masonry breakpoints
const breakpointColumnsObj = {
  default: 5, // ≥ 1200px
  1100: 3,
  768: 2,
  500: 1,
};

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

const Portfolio = () => {
  const isMobile = useIsMobile();
  const imagesToShow = isMobile ? images.slice(0, 8) : images;

  return (
    <div className="w-full min-h-screen bg-slate-800/80 py-12 flex flex-col items-center">
      <div className="mt-20">
        <h2 className="text-4xl font-bold mb-12 text-slate-100 font-edu">
          Portfolio
        </h2>
        <div className="max-w-7xl w-full px-4">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {imagesToShow.map((img, idx) => {
              const dir = directions[idx % directions.length];
              return (
                <motion.div
                  key={img + idx}
                  initial={{ opacity: 0, x: dir.x, y: dir.y }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: -dir.x, y: -dir.y }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.05,
                    ease: "easeOut",
                  }}
                  className="mb-4 rounded-xl overflow-hidden shadow-md bg-slate-700"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </motion.div>
              );
            })}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
