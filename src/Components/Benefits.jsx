import React from 'react';
import { TrendingUp, Clock, Shield, Award, Users, Zap } from 'lucide-react';

export function PlatformBenefitsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-teal-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-teal-50 text-teal-800 text-sm font-medium rounded-full mb-4">Proven Results</span>
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Platform</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            Our technology-driven approach to connecting tutors and learners delivers measurable improvements in academic performance and skill development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Statistics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Platform Impact</h3>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">94%</div>
                <p className="text-teal-100">of students report grade improvements</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">10K+</div>
                <p className="text-teal-100">qualified tutors across all subjects</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">98%</div>
                <p className="text-teal-100">session satisfaction rate</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">45+</div>
                <p className="text-teal-100">minutes average session duration</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Benefits */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start shadow-lg">
              <div className="bg-teal-500 rounded-full p-3 mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Performance Improvement</h4>
                <p className="text-teal-50">Our structured approach helps students achieve measurable academic progress through personalized instruction.</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start shadow-lg">
              <div className="bg-teal-500 rounded-full p-3 mr-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Time Efficiency</h4>
                <p className="text-teal-50">Our scheduling tools and targeted learning approach maximize productive study time and minimize wasted effort.</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start shadow-lg">
              <div className="bg-teal-500 rounded-full p-3 mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Verified Quality</h4>
                <p className="text-teal-50">All tutors undergo background checks and credential verification before joining our platform.</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start shadow-lg">
              <div className="bg-teal-500 rounded-full p-3 mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Adaptive Learning</h4>
                <p className="text-teal-50">Our tutors customize their approach based on individual learning styles and specific needs.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-white text-teal-700 hover:bg-teal-50 font-bold rounded-lg transition duration-300 shadow-lg">
            Start Learning Today
          </button>
        </div>
      </div>
    </section>
  );
}