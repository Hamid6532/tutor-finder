import React, { useState } from 'react';

const LearnerDashboard = () => {
  const [activeTab, setActiveTab] = useState('myGigs');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isGigModalOpen, setIsGigModalOpen] = useState(false);
  const [editingGig, setEditingGig] = useState(null);
  
  // Sample data
  const [gigs, setGigs] = useState([
    { id: 1, title: 'Web Development Project', skills: 'HTML, CSS, JavaScript', status: 'Active' },
    { id: 2, title: 'Data Analysis Task', skills: 'Python, SQL, Statistics', status: 'Completed' },
  ]);
  
  const [applications, setApplications] = useState([
    { id: 1, gigTitle: 'Web Development Project', applicantName: 'John Doe', status: 'Pending' },
    { id: 2, gigTitle: 'Data Analysis Task', applicantName: 'Jane Smith', status: 'Accepted' },
  ]);
  
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    bio: 'Learning software Engineering',
    skills: 'JavaScript, React, Node.js',
    education: 'Student in Computer Science',
  });

  const handleCreateGig = (newGig) => {
    setGigs([...gigs, { ...newGig, id: gigs.length + 1, status: 'Active' }]);
    setIsGigModalOpen(false);
    setEditingGig(null);
  };

  const handleEditGig = (gig) => {
    setEditingGig(gig);
    setIsGigModalOpen(true);
  };

  const handleUpdateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsProfileModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-teal-500 text-white p-6">
            <h2 className="text-2xl font-bold">Learner Dashboard</h2>
            <p className="mt-1 text-teal-100">Manage your gigs, applications, and profile</p>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white border-b">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('myGigs')}
                className={`px-4 py-3 font-medium text-sm focus:outline-none ${
                  activeTab === 'myGigs'
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-600 hover:text-teal-500'
                }`}
              >
                My Gigs
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-4 py-3 font-medium text-sm focus:outline-none ${
                  activeTab === 'applications'
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-600 hover:text-teal-500'
                }`}
              >
                Applications Received
              </button>
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className={`px-4 py-3 font-medium text-sm focus:outline-none ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-600 hover:text-teal-500'
                }`}
              >
                Profile Management
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* My Gigs Tab */}
            {activeTab === 'myGigs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">My Gigs</h3>
                  <button
                    onClick={() => {
                      setEditingGig(null);
                      setIsGigModalOpen(true);
                    }}
                    className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                  >
                    Create New Gig
                  </button>
                </div>

                {gigs.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">You haven't created any gigs yet.</p>
                    <button
                      onClick={() => setIsGigModalOpen(true)}
                      className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none"
                    >
                      Create Your First Gig
                    </button>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {gigs.map((gig) => (
                          <tr key={gig.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{gig.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{gig.skills}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                gig.status === 'Active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {gig.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button
                                onClick={() => handleEditGig(gig)}
                                className="text-teal-600 hover:text-teal-900 mr-3"
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-6">Applications Received</h3>
                
                {applications.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">You haven't received any applications yet.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gig</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {applications.map((app) => (
                          <tr key={app.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.gigTitle}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.applicantName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                app.status === 'Accepted' 
                                  ? 'bg-green-100 text-green-800' 
                                  : app.status === 'Rejected'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {app.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-teal-600 hover:text-teal-900 mr-3">
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Profile Management Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Profile Management</h3>
                <button 
                  onClick={() => setIsProfileModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <ProfileManagement 
                profile={profile} 
                onSave={handleUpdateProfile} 
                onCancel={() => setIsProfileModalOpen(false)} 
              />
            </div>
          </div>
        </div>
      )}

      {/* Create/Edit Gig Modal */}
      {isGigModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingGig ? 'Edit Gig' : 'Create New Gig'}
                </h3>
                <button 
                  onClick={() => {
                    setIsGigModalOpen(false);
                    setEditingGig(null);
                  }}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <GigForm 
                gig={editingGig} 
                onSave={handleCreateGig} 
                onCancel={() => {
                  setIsGigModalOpen(false);
                  setEditingGig(null);
                }} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Profile Management Component
const ProfileManagement = ({ profile, onSave, onCancel }) => {
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            required
          />
        </div>
        
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            id="bio"
            rows="3"
            value={formData.bio}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
          <input
            type="text"
            name="skills"
            id="skills"
            value={formData.skills}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="e.g. JavaScript, React, Node.js"
          />
        </div>
        
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education</label>
          <input
            type="text"
            name="education"
            id="education"
            value={formData.education}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>

        <div className="pt-4 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-teal-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

// Gig Form Component
const GigForm = ({ gig, onSave, onCancel }) => {
  const initialState = gig || {
    title: '',
    description: '',
    skills: '',
    duration: '',
    budget: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Gig Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            required
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            id="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            required
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Required Skills</label>
          <input
            type="text"
            name="skills"
            id="skills"
            value={formData.skills}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="e.g. HTML, CSS, JavaScript"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Estimated Duration</label>
            <select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            >
              <option value="">Select duration</option>
              <option value="less_than_week">Less than a week</option>
              <option value="1_2_weeks">1-2 weeks</option>
              <option value="2_4_weeks">2-4 weeks</option>
              <option value="1_3_months">1-3 months</option>
              <option value="3_plus_months">3+ months</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
            <input
              type="text"
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="e.g. $500"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-teal-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            {gig ? 'Update Gig' : 'Create Gig'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default LearnerDashboard;