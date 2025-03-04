import React from 'react';
import AppContainer from './AppContainer';
function AboutPage() {
  return (
    <AppContainer>
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="py-20 bg-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tutor Finder</h1>
          <p className="text-xl max-w-3xl mx-auto">Connecting passionate learners with expert tutors across all domains of knowledge.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img src="/api/placeholder/600/400" alt="Students learning" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-teal-700 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Tutor Finder, we believe everyone deserves access to quality education and skill development. 
                Our platform serves as a bridge between those who want to share their expertise and those eager to learn, 
                creating opportunities for knowledge transfer across all domains.
              </p>
              <p className="text-gray-700">
                Whether you're looking to learn guitar, master a new language, improve your cooking skills, 
                get help with mathematics, or acquire any other knowledge or skill, Tutor Finder helps you 
                connect with qualified instructors who can guide your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">How Tutor Finder Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Create Your Profile</h3>
              <p className="text-gray-600">Sign up and tell us what you want to learn or what you can teach. Your profile helps us make the right connections.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Find Your Match</h3>
              <p className="text-gray-600">Browse through our verified tutors or wait for learners to find you. Our matching algorithm helps find the perfect fit.</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-teal-600 mb-3">Start Learning</h3>
              <p className="text-gray-600">Schedule sessions, communicate directly, and begin your learning journey. Rate your experience and track your progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">Benefits of Tutor Finder</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* For Learners */}
            <div className="bg-teal-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">For Learners</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Access to verified, qualified tutors across all subjects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Flexible scheduling to fit your lifestyle</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Personalized learning experience tailored to your needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Progress tracking and achievement recognition</span>
                </li>
              </ul>
            </div>
            
            {/* For Tutors */}
            <div className="bg-teal-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">For Tutors</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Platform to showcase your expertise and credentials</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Flexible schedule - teach when it works for you</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Additional income stream doing what you love</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Build your teaching portfolio with reviews and ratings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-teal-600">Sarah L.</h4>
                  <p className="text-sm text-gray-500">Piano Student</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Finding a piano teacher who could work with my schedule was always a challenge. 
                Through Tutor Finder, I connected with an amazing teacher who has helped me progress faster than I thought possible."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-teal-600">Michael T.</h4>
                  <p className="text-sm text-gray-500">Math Tutor</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a retired math teacher, I wanted to continue sharing my knowledge. 
                This platform has connected me with students who truly value education, 
                and I'm able to make a difference while earning additional income."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-teal-600">Elena R.</h4>
                  <p className="text-sm text-gray-500">Spanish Learner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I needed to learn Spanish quickly for a job opportunity. 
                The platform matched me with a native speaker who customized lessons to my specific needs. 
                I'm now conversational in just three months!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of learners and tutors who are already connecting and growing together on our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-100 transition">
              Find a Tutor
            </button>
            <button className="bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
              Become a Tutor
            </button>
          </div>
        </div>
      </section>
    </div>
    </AppContainer>
  );
}

export default AboutPage;