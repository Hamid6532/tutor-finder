import React from 'react';
import { Search, Calendar, Star, CreditCard, MessageSquare, ShieldCheck } from 'lucide-react';

export function FeatureHighlightsSection() {
  const features = [
    {
      icon: <Search className="w-10 h-10 text-teal-200" />,
      title: "Advanced Search",
      description: "Find tutors based on subject, location, experience, availability, and reviews."
    },
    {
      icon: <Star className="w-10 h-10 text-teal-200" />,
      title: "Ratings & Reviews",
      description: "Make informed choices with detailed feedback from previous students."
    },
    {
      icon: <Calendar className="w-10 h-10 text-teal-200" />,
      title: "Smart Scheduling",
      description: "Book sessions with real-time availability checks and automated reminders."
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-teal-200" />,
      title: "Communication Tools",
      description: "Connect easily with in-app messaging, video calls, and secure file sharing."
    },
    {
      icon: <CreditCard className="w-10 h-10 text-teal-200" />,
      title: "Secure Payments",
      description: "Process payments safely with support for multiple payment methods."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-teal-200" />,
      title: "Privacy & Security",
      description: "Rest easy with data encryption and role-based access controls."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform offers comprehensive tools for both tutors and students to create the perfect learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 border-t-4 border-teal-500 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-teal-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}