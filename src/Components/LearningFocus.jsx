import React from "react";
import { BookOpen, Code, Music, Globe, Calculator, ChefHat, Dumbbell } from "lucide-react";

export default function AcademicFocusSection() {
  const subjects = [
    {
      icon: <BookOpen className="w-12 h-12 text-teal-700" />,
      name: "Language Arts",
      topics: [
        "Reading Comprehension",
        "Writing Skills",
        "Grammar",
        "Literature Analysis",
      ],
      color: "bg-amber-50",
    },
    {
      icon: <Calculator className="w-12 h-12 text-teal-700" />,
      name: "Mathematics",
      topics: ["Algebra", "Geometry", "Calculus", "Statistics", "Probability"],
      color: "bg-blue-50",
    },
    {
      icon: <Globe className="w-12 h-12 text-teal-700" />,
      name: "Social Sciences",
      topics: ["History", "Geography", "Economics", "Political Science"],
      color: "bg-green-50",
    },

    {
      icon: <Code className="w-12 h-12 text-teal-700" />,
      name: "Computer Science",
      topics: [
        "Programming",
        "Web Development",
        "Data Structures",
        "Algorithms",
      ],
      color: "bg-red-50",
    },
    {
      icon: <Music className="w-12 h-12 text-teal-700" />,
      name: "Arts & Music",
      topics: [
        "Music Theory",
        "Instrument Lessons",
        "Visual Arts",
        "Photography",
      ],
      color: "bg-indigo-50",
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-teal-700" />,
      name: "Skills",
      topics: ["Cooking", "Driving", "Sports & Fitness", "Design"],
      color: "bg-green-50",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full mb-4">
            Academic Excellence
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Subject Coverage
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform connects you with expert tutors across all major
            academic disciplines and skill areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className={`${subject.color} rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start mb-6">
                <div className="p-3 rounded-lg bg-white shadow-sm mr-4">
                  {subject.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                  {subject.name}
                </h3>
              </div>

              <div className="ml-16">
                <ul className="space-y-2">
                  {subject.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 ml-16">
                <a
                  href="#"
                  className="text-teal-600 font-medium hover:text-teal-700 inline-flex items-center"
                >
                  Find tutors
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-20 text-center">
          <p className="text-gray-600 mb-4">
            Need help with a subject not listed above?
          </p>
          <button className="mt-5 px-8 py-3 bg-teal-600 text-white hover:bg-teal-700 font-medium rounded-md transition duration-300 shadow-md">
            Explore All Subjects
          </button>
        </div>
      </div>
    </section>
  );
}
