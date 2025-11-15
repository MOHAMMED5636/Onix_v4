'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      {/* ONIX GROUP LOADING Video */}
      <video
        className="object-contain w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] xl:w-[600px] h-auto"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/ONIX GROUP LOADING.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="flex items-center justify-center h-full">
          <Image 
            src="/images/ONIX GROUP 0002.png" 
            alt="ONIX GROUP Loading" 
            className="object-contain animate-pulse w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-auto"
          />
        </div>
      </video>
    </div>
  )
}
