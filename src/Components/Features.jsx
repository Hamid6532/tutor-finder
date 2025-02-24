import React from 'react';
import { Search, Calendar, Star, CreditCard, MessageSquare, ShieldCheck } from 'lucide-react';

export function FeatureHighlightsSection() {
  const features = [
    {
      icon: <Search className="w-10 h-10 text-teal-50 stroke-2" />,
      title: "Intelligent Search",
      description: "Find the perfect tutor with our advanced filtering system based on subject expertise, location, availability, and verified reviews."
    },
    {
      icon: <Star className="w-10 h-10 text-teal-50 stroke-2" />,
      title: "Quality Assurance",
      description: "Make informed decisions with our comprehensive rating system and detailed feedback from previous students."
    },
    {
      icon: <Calendar className="w-10 h-10 text-teal-50 stroke-2" />,
      title: "Seamless Scheduling",
      description: "Easily book and manage sessions with real-time availability, automated reminders, and calendar integration."
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-teal-50 stroke-2" />,
      title: "Integrated Communication",
      description: "Connect effortlessly through secure in-app messaging, HD video conferencing, and protected file-sharing capabilities."
    },
    {
      icon: <CreditCard className="w-10 h-10 text-teal-50 stroke-2" />,
      title: "Secure Transactions",
      description: "Process payments with confidence using our encrypted payment gateway supporting multiple payment methods."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-teal-50 stroke-2" />,
      title: "Advanced Security",
      description: "Rest assured with AES-256 data encryption, role-based access controls, and comprehensive privacy protection."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full mb-4">Platform Features</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Designed for Educational Excellence</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools creates an optimal environment for personalized learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-b-4 border-teal-500 group hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}