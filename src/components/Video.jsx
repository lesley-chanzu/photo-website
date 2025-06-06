import React from 'react'
import { motion } from 'framer-motion';

const Video = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className='flex justify-center items-center bg-transparent'
    >
        <div className='w-full h-128 rounded-lg overflow-hidden shadow-lg mt-10'>
            <video
            src='/isorepublic-free-video-playing-football-beach.mp4'
            className='w-full h-full object-cover'
            autoPlay
            muted
            loop
            />
        </div>
    </motion.div>
  )
}

export default Video