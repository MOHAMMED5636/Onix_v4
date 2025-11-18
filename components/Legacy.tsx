"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Legacy() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
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
          webkit-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-orientation="portraint"
        >
          <source src="/videos/ONIX_GROUP_LOADING.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="flex items-center justify-center h-full">
            <Image
              src="/images/ONIX_GROUP_0002.png"
              alt="ONIX GROUP Loading"
              width={240}
              height={240}
              className="object-contain animate-pulse w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-auto"
            />
          </div>
        </video>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* ONIX Logo - Top Left (Clickable to Home) */}
      <div className="fixed -top-20 left-0 z-50">
        <Link
          href="/"
          className="inline-block hover:opacity-80 transition-opacity duration-300"
        >
          <Image
            src="/images/ONIX_GROUP_0002.png"
            alt="ONIX Logo"
            width={240}
            height={240}
            className="w-56 h-56 object-contain"
          />
        </Link>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* OUR LEADERS Section - First on mobile, left on desktop */}
        <Link
          href="/leaders"
          className="flex-1 relative group cursor-pointer h-1/2 md:h-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/80 z-10 group-hover:from-blue-400/60 group-hover:to-blue-600/60 transition-all duration-300"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 group-hover:opacity-60 group-hover:brightness-150 group-hover:contrast-125 group-hover:scale-110 transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
            }}
          ></div>

          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8 uppercase tracking-wider">
                OUR LEADERS
              </h2>
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 group-active:shadow-2xl group-active:shadow-white/50 transition-all duration-200">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        {/* OUR STORY Section - Second on mobile, right on desktop */}
        <Link
          href="/timeline"
          className="flex-1 relative group cursor-pointer h-1/2 md:h-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-blue-900/80 z-10 group-hover:from-blue-400/60 group-hover:to-blue-600/60 transition-all duration-300"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 group-hover:opacity-60 group-hover:brightness-150 group-hover:contrast-125 group-hover:scale-110 transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
            }}
          ></div>

          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8 uppercase tracking-wider">
                OUR STORY
              </h2>
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 group-active:shadow-2xl group-active:shadow-white/50 transition-all duration-200">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
              STEP INTO THE WORLD OF <span className="text-red-500">ONIX</span> GROUP OF COMPANIES
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project?
              <br />
              Contact us for a consultation.
              <br />
              Let's discuss how our group of companies can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">
                    Mardoof Building, Gate B, Office 114<br />Sheikh Zayed Road, Al Safa 1, Dubai
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">04 283 8880</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">info@onixgroup.ae</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg">
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-white text-lg">
                    Saturday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="AE (+971) 50 123 4567"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Request a manager's consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
