import React from "react";

export default function LandingPageHero() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/tutor-bg.jpg')" }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-20 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center sm:text-left max-w-2xl">
          {/* Statistics Counter */}
          <div className="text-teal-400 font-bold mb-2">
            <span className="text-2xl sm:text-3xl lg:text-4xl">
              4,000+ Expert Tutors
            </span>
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl">
              in 250+ Subjects
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Tutoring That
            <br />
            Improves Student
            <br />
            Outcomes
          </h1>

          {/* Supporting text from SRS */}
          <p className="mt-4 text-xl text-gray-100 max-w-lg">
            Connect with qualified tutors through our intuitive platform and
            find personalized tutoring services tailored to your needs.
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-md text-lg transition duration-300 shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-md text-lg transition duration-300">
              Find Tutors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
