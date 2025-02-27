import React, { useState } from 'react';
import Logo from './Logo'
import { Menu, X, Search, Plus, Home, UserPlus, User, Briefcase, FolderOpen, BookOpen, Award, MapPin, DollarSign, Calendar } from 'lucide-react';

// Stats Card Component
const StatsCard = ({ icon, title, value, color }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className={`flex-shrink-0 ${color} rounded-md p-3`}>
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

// Gig Item Component
const GigItem = ({ title, status, user, location, budget }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <li>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-teal-600 truncate">{title}</p>
          <div className="ml-2 flex-shrink-0 flex">
            <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(status)}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </p>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <p className="flex items-center text-sm text-gray-500">
              <User className="mr-1.5 h-4 w-4 text-gray-400" />
              {user}
            </p>
            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
              <MapPin className="mr-1.5 h-4 w-4 text-gray-400" />
              {location}
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
            <DollarSign className="mr-1.5 h-4 w-4 text-gray-400" />
            <p>{budget}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

// Application Item Component
const ApplicationItem = ({ gigTitle, status, tutorName, appliedDate }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <li>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-teal-600 truncate">{gigTitle}</p>
          <div className="ml-2 flex-shrink-0 flex">
            <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(status)}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </p>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <p className="flex items-center text-sm text-gray-500">
              <UserPlus className="mr-1.5 h-4 w-4 text-gray-400" />
              {tutorName}
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
            <Calendar className="mr-1.5 h-4 w-4 text-gray-400" />
            <p>{appliedDate}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

// Category Item Component
const CategoryItem = ({ icon, name, tutorsCount, gigsCount, color }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className={`flex-shrink-0 h-10 w-10 ${color} rounded-full flex items-center justify-center`}>
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{tutorsCount} tutors available</p>
        </div>
      </div>
      <span className={`${color} px-2 py-1 rounded text-xs font-medium`}>
        {gigsCount} gigs
      </span>
    </div>
  );
};

// Main Dashboard Component
const TutorFinderDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sample data
  const stats = [
    { title: 'Total Tutors', value: 128, icon: <UserPlus className="h-5 w-5 text-teal-600" />, color: 'bg-teal-100' },
    { title: 'Total Learners', value: 256, icon: <User className="h-5 w-5 text-blue-600" />, color: 'bg-blue-100' },
    { title: 'Active Gigs', value: 64, icon: <Briefcase className="h-5 w-5 text-green-600" />, color: 'bg-green-100' },
    { title: 'Applications', value: 192, icon: <FolderOpen className="h-5 w-5 text-purple-600" />, color: 'bg-purple-100' }
  ];

  const recentGigs = [
    { title: 'Math Tutor Needed for Calculus', status: 'open', user: 'John Doe', location: 'New York, NY', budget: '$50/hr' },
    { title: 'Spanish Tutor for Beginners', status: 'open', user: 'Jane Smith', location: 'Los Angeles, CA', budget: '$35/hr' },
    { title: 'Physics Tutor for AP Physics', status: 'open', user: 'Michael Johnson', location: 'Chicago, IL', budget: '$45/hr' }
  ];

  const recentApplications = [
    { gigTitle: 'Math Tutor Needed for Calculus', status: 'pending', tutorName: 'Alex Williams', appliedDate: 'Applied 2d ago' },
    { gigTitle: 'Spanish Tutor for Beginners', status: 'accepted', tutorName: 'Maria Garcia', appliedDate: 'Applied 5d ago' }
  ];

  const popularCategories = [
    { name: 'Mathematics', tutorsCount: 42, gigsCount: 32, icon: <BookOpen className="h-5 w-5 text-teal-600" />, color: 'bg-teal-100 text-teal-600' },
    { name: 'Languages', tutorsCount: 38, gigsCount: 28, icon: <BookOpen className="h-5 w-5 text-blue-600" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Science', tutorsCount: 35, gigsCount: 24, icon: <BookOpen className="h-5 w-5 text-purple-600" />, color: 'bg-purple-100 text-purple-600' },
    { name: 'Programming', tutorsCount: 29, gigsCount: 18, icon: <BookOpen className="h-5 w-5 text-red-600" />, color: 'bg-red-100 text-red-600' }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-teal-600 text-white">
          <div className="flex items-center justify-center h-16 border-b border-teal-700">
            <Logo />
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <a href="#" className="bg-teal-700 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <Home className="mr-3 h-5 w-5 text-teal-300" />
                Dashboard
              </a>
              <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <UserPlus className="mr-3 h-5 w-5 text-teal-300" />
                Tutors
              </a>
              <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <User className="mr-3 h-5 w-5 text-teal-300" />
                Learners
              </a>
              <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <Briefcase className="mr-3 h-5 w-5 text-teal-300" />
                Gigs
              </a>
              <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <FolderOpen className="mr-3 h-5 w-5 text-teal-300" />
                Applications
              </a>
              <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <BookOpen className="mr-3 h-5 w-5 text-teal-300" />
                Categories
              </a>
              <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <Award className="mr-3 h-5 w-5 text-teal-300" />
                Qualifications
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-teal-700 p-4">
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img className="h-8 w-8 rounded-full" src="/api/placeholder/32/32" alt="User avatar" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs font-medium text-teal-200 group-hover:text-teal-100">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu and main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between bg-teal-600 p-4">
          <div className="flex items-center">
            <button 
              className="text-white focus:outline-none" 
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-3 text-white">
              <Logo />
            </div>
          </div>
          <div>
            <button className="text-white focus:outline-none">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 flex z-40 md:hidden">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-teal-600">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button 
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <Logo />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  <a href="#" className="bg-teal-700 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
                    <Home className="mr-3 h-6 w-6 text-teal-300" />
                    Dashboard
                  </a>
                  <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                    <UserPlus className="mr-3 h-6 w-6 text-teal-300" />
                    Tutors
                  </a>
                  <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                    <User className="mr-3 h-6 w-6 text-teal-300" />
                    Learners
                  </a>
                  <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                    <Briefcase className="mr-3 h-6 w-6 text-teal-300" />
                    Gigs
                  </a>
                  <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                    <FolderOpen className="mr-3 h-6 w-6 text-teal-300" />
                    Applications
                  </a>
                  <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                    <BookOpen className="mr-3 h-6 w-6 text-teal-300" />
                    Categories
                  </a>
                  <a href="#" className="text-white hover:bg-teal-700 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                    <Award className="mr-3 h-6 w-6 text-teal-300" />
                    Qualifications
                  </a>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-teal-700 p-4">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img className="h-10 w-10 rounded-full" src="/api/placeholder/40/40" alt="User avatar" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">Admin User</p>
                      <p className="text-sm font-medium text-teal-200 group-hover:text-teal-100">View profile</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-white shadow-sm rounded-md py-2 px-4 pl-10 block w-full border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md shadow-sm">
                  <Plus className="h-5 w-5 inline-block mr-1" />
                  New
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <StatsCard 
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  color={stat.color}
                />
              ))}
            </div>

            {/* Recent Gigs */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Gigs</h2>
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {recentGigs.map((gig, index) => (
                    <GigItem 
                      key={index}
                      title={gig.title}
                      status={gig.status}
                      user={gig.user}
                      location={gig.location}
                      budget={gig.budget}
                    />
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent Applications and Categories */}
            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Applications</h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {recentApplications.map((application, index) => (
                      <ApplicationItem 
                        key={index}
                        gigTitle={application.gigTitle}
                        status={application.status}
                        tutorName={application.tutorName}
                        appliedDate={application.appliedDate}
                      />
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Popular Categories</h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-md p-4">
                  <div className="space-y-4">
                    {popularCategories.map((category, index) => (
                      <CategoryItem 
                        key={index}
                        name={category.name}
                        tutorsCount={category.tutorsCount}
                        gigsCount={category.gigsCount}
                        icon={category.icon}
                        color={category.color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TutorFinderDashboard;