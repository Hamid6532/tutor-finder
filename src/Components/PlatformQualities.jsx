import React from 'react'

export default function PlatformQualitiesSection() {
  return (
    <div className="bg-teal-600 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold ">Discover Excellence</h2>
            
            <div className="space-y-6 mt-6">
              <div className="bg-teal-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">For Educators</h3>
                <p>Showcase your expertise on our platform with detailed profiles highlighting your qualifications and teaching style. Set your own rates, manage your schedule with our intuitive calendar, and connect with motivated learners seeking your specific knowledge.</p>
              </div>
              
              <div className="bg-teal-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">For Knowledge Seekers</h3>
                <p>Find the perfect educational match through our advanced search and filtering options. Compare tutors based on subject expertise, availability, location, and verified reviews to make informed decisions that suit your learning needs.</p>
              </div>
              
              <div className="bg-teal-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Seamless Experience</h3>
                <p>Enjoy secure payment processing, integrated video sessions, in-app messaging, and file sharing capabilities. Our platform prioritizes data encryption and privacy, ensuring a safe environment for personalized learning experiences.</p>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-white text-teal-700 hover:bg-gray-100 font-bold rounded-md text-lg transition duration-300 shadow-lg">
              Get Started
            </button>
          </div>
          
          {/* Right Content - Using the existing image with overlay text */}
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Promote Learning Success</h2>
            
            {/* Image container with positioned text overlays */}
            <div className="relative">
              {/* Your existing image */}
              <img 
                src="/images/qualities.svg" 
                alt="Student Success Framework" 
                className="w-full  h-auto"
              />
              
              {/* Positioned text overlays */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-right">
                <p className="text-xl font-semibold">Extensive</p>
                <p className="text-xl font-semibold">Data</p>
              </div>
              
              <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 text-left">
                <p className="text-xl font-semibold">Exceptional</p>
                <p className="text-xl font-semibold">Support</p>
              </div>
              
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 text-right">
                <p className="text-xl font-semibold">Expert</p>
                <p className="text-xl font-semibold">Tutors</p>
              </div>
              
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-left">
                <p className="text-xl font-semibold">Effective</p>
                <p className="text-xl font-semibold">Methodology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}