import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { StarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const TutorFinderPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for tutors
  const tutors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      photo: "/api/placeholder/400/400",
      subjects: ["Mathematics", "Physics", "Computer Science"],
      hourlyRate: 45,
      rating: 4.8,
      reviewCount: 24,
      location: "New York, NY",
      shortBio: "Ph.D. in Applied Mathematics with 8+ years of university teaching experience."
    },
    {
      id: 2,
      name: "Prof. David Chen",
      photo: "/api/placeholder/400/400",
      subjects: ["Chemistry", "Biology"],
      hourlyRate: 40,
      rating: 4.6,
      reviewCount: 18,
      location: "Boston, MA",
      shortBio: "Molecular Biologist with a passion for making science accessible to all students."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      photo: "/api/placeholder/400/400",
      subjects: ["Spanish", "English", "Literature"],
      hourlyRate: 35,
      rating: 4.9,
      reviewCount: 31,
      location: "Chicago, IL",
      shortBio: "Bilingual language expert with an M.A. in Comparative Literature and 5 years of tutoring experience."
    },
    {
      id: 4,
      name: "Michael Thompson",
      photo: "/api/placeholder/400/400",
      subjects: ["History", "Political Science", "Economics"],
      hourlyRate: 38,
      rating: 4.7,
      reviewCount: 15,
      location: "Los Angeles, CA",
      shortBio: "Former university lecturer specializing in modern world history and political economics."
    }
  ];

  const renderStarRating = (rating) => {
    return (
      <div className="flex items-center">
        <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
        <span className="ml-1 text-sm text-gray-600">{rating} ({tutors[0].reviewCount} reviews)</span>
      </div>
    );
  };

  return (
    
    <div className="min-h-screen bg-gray-50 pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find the Perfect Tutor</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with experienced tutors in any subject, tailored to your learning needs.
          </p>
        </div>

        {/* Search and filter section */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm"
                placeholder="Search by subject, name, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2 text-gray-400" />
              Filters
            </button>
          </div>
        </div>

        {/* Tutors list */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tutors.map((tutor) => (
            <Link key={tutor.id} to={`/tutor/${tutor.id}`} className="block">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <img 
                      src={tutor.photo} 
                      alt={tutor.name} 
                      className="h-16 w-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{tutor.name}</h2>
                      {renderStarRating(tutor.rating)}
                      <p className="text-sm text-gray-500 mt-1">{tutor.location}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {tutor.subjects.map((subject, index) => (
                        <span 
                          key={index} 
                          className="inline-block px-2 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">{tutor.shortBio}</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-lg font-bold text-teal-600">${tutor.hourlyRate}<span className="text-sm font-normal text-gray-500">/hr</span></span>
                      <span className="text-sm text-teal-600 font-medium">View Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorFinderPage;