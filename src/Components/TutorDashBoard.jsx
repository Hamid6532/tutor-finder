import React, { useState } from 'react';

const TutorDashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Sample data for gigs
  const gigs = [
    { id: 1, title: 'Mathematics Tutor', category: 'Math', location: 'Online', rate: '$25/hr', status: 'Open' },
    { id: 2, title: 'Physics Instructor', category: 'Science', location: 'New York', rate: '$30/hr', status: 'Open' },
    { id: 3, title: 'English Literature', category: 'Languages', location: 'Remote', rate: '$22/hr', status: 'Open' },
    { id: 4, title: 'Computer Science Tutor', category: 'Technology', location: 'Online', rate: '$35/hr', status: 'Open' },
    { id: 5, title: 'History Teacher', category: 'Humanities', location: 'Boston', rate: '$28/hr', status: 'Open' },
    { id: 6, title: 'Chemistry Tutor', category: 'Science', location: 'Online', rate: '$27/hr', status: 'Open' },
  ];
  
  // Sample data for applications
  const applications = [
    { id: 101, gigTitle: 'Mathematics Tutor', appliedDate: '2025-02-25', status: 'Pending', contactShared: false },
    { id: 102, gigTitle: 'English Literature', appliedDate: '2025-02-20', status: 'Accepted', contactShared: true },
    { id: 103, gigTitle: 'Physics Instructor', appliedDate: '2025-02-15', status: 'Rejected', contactShared: false },
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle profile dropdown
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Render Dashboard Home
  const DashboardHome = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-800">Applied Gigs</h3>
        <p className="text-3xl font-bold text-teal-600">{applications.length}</p>
        <p className="text-sm text-gray-500">Total applications submitted</p>
      </div>
      
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-800">Active Gigs</h3>
        <p className="text-3xl font-bold text-teal-600">1</p>
        <p className="text-sm text-gray-500">Currently teaching</p>
      </div>
      
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-800">Profile Completion</h3>
        <p className="text-3xl font-bold text-teal-600">85%</p>
        <p className="text-sm text-gray-500">Complete your profile for better matches</p>
      </div>
      
      <div className="bg-white shadow rounded-lg p-4 md:col-span-2 lg:col-span-3">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center p-2 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <p className="text-sm">Your application for "English Literature" was accepted!</p>
            <p className="text-xs text-gray-500 ml-auto">2 days ago</p>
          </div>
          <div className="flex items-center p-2 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <p className="text-sm">New message from a student regarding Mathematics tutoring.</p>
            <p className="text-xs text-gray-500 ml-auto">5 days ago</p>
          </div>
          <div className="flex items-center p-2 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <p className="text-sm">Your application for "Physics Instructor" was rejected.</p>
            <p className="text-xs text-gray-500 ml-auto">1 week ago</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Render Browse Gigs Page
  const BrowseGigsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = ['All', 'Math', 'Science', 'Languages', 'Technology', 'Humanities'];
    
    const filteredGigs = gigs.filter(gig => {
      return (
        (selectedCategory === 'All' || gig.category === selectedCategory) &&
        gig.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse Gigs</h2>
        
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search gigs..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGigs.map(gig => (
            <div key={gig.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="bg-teal-600 text-white px-4 py-2">
                <h3 className="font-medium">{gig.title}</h3>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Category:</span>
                  <span className="text-sm font-medium">{gig.category}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Location:</span>
                  <span className="text-sm font-medium">{gig.location}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Rate:</span>
                  <span className="text-sm font-medium">{gig.rate}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className="text-sm font-medium text-green-600">{gig.status}</span>
                </div>
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded transition duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredGigs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No gigs found matching your criteria.</p>
          </div>
        )}
      </div>
    );
  };

  // Render Application Management Page
  const ApplicationManagementPage = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-500 mb-6">Application Management</h2>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gig Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Shared</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map(app => (
                  <tr key={app.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{app.gigTitle}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{app.appliedDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${app.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          app.status === 'Accepted' ? 'bg-green-100 text-green-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.contactShared ? 'Yes' : 'No'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {app.status === 'Accepted' && !app.contactShared ? (
                        <button className="text-teal-600 hover:text-teal-900">Share WhatsApp</button>
                      ) : app.status === 'Pending' ? (
                        <button className="text-red-600 hover:text-red-900">Withdraw</button>
                      ) : (
                        <button className="text-gray-400 cursor-not-allowed" disabled>No actions</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Render Profile Management Page
  const ProfileManagementPage = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Management</h2>
        
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600 text-4xl">JD</span>
              </div>
              <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-200">
                Upload Photo
              </button>
              
              <div className="mt-8 w-full">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Credentials</h3>
                <div className="border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">MSc Mathematics</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">University of Cambridge</span>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Teaching Certificate</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">National Education Board</span>
                </div>
                
                <button className="mt-4 text-teal-600 flex items-center text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Add New Credential
                </button>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" defaultValue="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" defaultValue="Doe" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" defaultValue="john.doe@example.com" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" defaultValue="+1 234 567 8900" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                  <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" defaultValue="+1 234 567 8900" />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subjects (select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="math" className="mr-2" checked />
                      <label htmlFor="math" className="text-sm">Mathematics</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="physics" className="mr-2" checked />
                      <label htmlFor="physics" className="text-sm">Physics</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="chemistry" className="mr-2" />
                      <label htmlFor="chemistry" className="text-sm">Chemistry</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="biology" className="mr-2" />
                      <label htmlFor="biology" className="text-sm">Biology</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="english" className="mr-2" />
                      <label htmlFor="english" className="text-sm">English</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="history" className="mr-2" />
                      <label htmlFor="history" className="text-sm">History</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 h-32" 
                    defaultValue="Experienced Mathematics and Physics tutor with over 5 years of teaching experience. I specialize in preparing students for college entrance exams and improving grades."
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" defaultValue="5" min="0" />
                </div>
                
                <div className="flex justify-end">
                  <button type="button" className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-teal-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-teal-700">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Main component rendering
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-teal-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">TutorMatch</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              <button 
                onClick={() => setCurrentPage('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'dashboard' ? 'bg-teal-700 text-white' : 'text-teal-100 hover:bg-teal-500'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('browse')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'browse' ? 'bg-teal-700 text-white' : 'text-teal-100 hover:bg-teal-500'}`}
              >
                Browse Gigs
              </button>
              <button 
                onClick={() => setCurrentPage('applications')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'applications' ? 'bg-teal-700 text-white' : 'text-teal-100 hover:bg-teal-500'}`}
              >
                Applications
              </button>
            </nav>
            
            {/* Profile Dropdown */}
            <div className="hidden md:ml-4 md:flex md:items-center">
              <div className="relative">
                <button 
                  onClick={toggleProfile}
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-800 focus:ring-white"
                >
                  <div className="h-8 w-8 rounded-full bg-teal-200 flex items-center justify-center">
                    <span className="text-teal-600 font-medium">JD</span>
                  </div>
                </button>
                
                {isProfileOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <button
                      onClick={() => {
                        setCurrentPage('profile');
                        setIsProfileOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Profile
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Settings
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-teal-100 hover:bg-teal-500 focus:outline-none"
              >
                <svg 
                  className="h-6 w-6" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => {
                  setCurrentPage('dashboard');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'dashboard' ? 'bg-teal-700 text-white' : 'text-teal-100 hover:bg-teal-500'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setCurrentPage('browse');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'browse' ? 'bg-teal-700 text-white' : 'text-teal-100 hover:bg-teal-500'
                }`}
              >
                Browse Gigs
              </button>
              <button
                onClick={() => {
                  setCurrentPage('applications');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'applications' ? 'bg-teal-700 text-white' : 'text-teal-100 hover:bg-teal-500'
                }`}
              >
                Applications
              </button>
              <button
                onClick={() => {
                  setCurrentPage('profile');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'profile' ? 'bg-teal-700 text-white' : 'text-teal-100 hover:bg-teal-500'
                }`}
              >
                Profile
              </button>
              <button
                className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-teal-100 hover:bg-teal-500"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {currentPage === 'dashboard' && <DashboardHome />}
          {currentPage === 'browse' && <BrowseGigsPage />}
          {currentPage === 'applications' && <ApplicationManagementPage />}
          {currentPage === 'profile' && <ProfileManagementPage />}
        </div>
      </main>
    </div>
  );
};

export default TutorDashboard;