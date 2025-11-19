"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Force hide after 3 seconds regardless of video state
    timerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  // Don't render until mounted (prevents hydration issues)
  if (!mounted || !isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      {!videoError ? (
        <video
          className="object-contain w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] xl:w-[600px] h-auto"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={handleVideoError}
          onLoadedData={() => {
            // Video loaded successfully, but still hide after timer
          }}
        >
          <source src="/videos/ONIX_GROUP_LOADING.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="flex items-center justify-center h-full">
          <Image
            src="/images/ONIX_GROUP_0002.png"
            alt="ONIX GROUP Loading"
            width={240}
            height={240}
            className="object-contain animate-pulse w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-auto"
          />
        </div>
      )}
    </div>
  );
}
