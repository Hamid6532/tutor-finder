import React from 'react';
import { Link } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MessageSquare, Search, BarChart2, User, DollarSign, BookOpen, History } from 'lucide-react';

const DashBoardPage = () => { 
  // Sample placeholder data
  const upcomingSessions = [
    { id: 1, date: '2025-02-27', time: '15:00', tutor: 'Dr. Jane Smith', subject: 'Advanced Mathematics' },
    { id: 2, date: '2025-02-28', time: '16:30', tutor: 'Prof. David Wilson', subject: 'Physics' },
    { id: 3, date: '2025-03-02', time: '10:00', tutor: 'Ms. Emily Chen', subject: 'Literature' },
  ];
  
  const messages = [
    { id: 1, sender: 'Dr. Jane Smith', preview: 'Looking forward to our session tomorrow!', time: '2 hours ago' },
    { id: 2, sender: 'Prof. David Wilson', preview: 'Please prepare the exercises we discussed', time: '1 day ago' },
  ];
  
  const history = [
    { id: 1, date: '2025-02-20', tutor: 'Dr. Jane Smith', subject: 'Mathematics', reviewed: true },
    { id: 2, date: '2025-02-15', tutor: 'Ms. Emily Chen', subject: 'Literature', reviewed: false },
  ];
  
  const earnings = [
    { id: 1, date: '2025-02-20', student: 'Michael Johnson', subject: 'Mathematics', amount: 45 },
    { id: 2, date: '2025-02-15', student: 'Sarah Williams', subject: 'Literature', amount: 40 },
  ];
<Link />
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              {/* This would be your logo */}
              <span className="text-teal-600 font-bold text-xl">T</span>
            </div>
            <h1 className="text-2xl font-bold">TutorConnect</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
              {/* <MessageSquare className="h-6 w-6" /> */}
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
                {/* <User className="h-5 w-5" /> */}
              </div>
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto py-6 px-4">
        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="student" className="text-lg py-3">Student/Parent Dashboard</TabsTrigger>
            <TabsTrigger value="tutor" className="text-lg py-3">Tutor Dashboard</TabsTrigger>
          </TabsList>

          {/* Student/Parent Dashboard */}
          <TabsContent value="student" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upcoming Sessions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-teal-600" />
                    Upcoming Sessions
                  </h2>
                  <button className="text-teal-600 hover:underline text-sm">View All</button>
                </div>
                <div className="space-y-4">
                  {upcomingSessions.map(session => (
                    <div key={session.id} className="border-b pb-4 last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{session.subject}</h3>
                          <p className="text-gray-600">{session.tutor}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-teal-600 font-medium">{new Date(session.date).toLocaleDateString()}</p>
                          <p className="text-sm text-gray-500">{session.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-teal-600" />
                    Messages
                  </h2>
                  <button className="text-teal-600 hover:underline text-sm">View All</button>
                </div>
                <div className="space-y-4">
                  {messages.map(message => (
                    <div key={message.id} className="border-b pb-4 last:border-0">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{message.sender}</h3>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-gray-600 truncate">{message.preview}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition">
                    Compose Message
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search Tutors */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Search className="mr-2 h-5 w-5 text-teal-600" />
                  <h2 className="text-xl font-semibold">Search Tutors</h2>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search by subject, name, or expertise..."
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Mathematics</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Physics</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">English</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Chemistry</span>
                </div>
                <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition">
                  Find Tutors
                </button>
              </div>

              {/* History */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <History className="mr-2 h-5 w-5 text-teal-600" />
                    Session History
                  </h2>
                  <button className="text-teal-600 hover:underline text-sm">View All</button>
                </div>
                <div className="space-y-4">
                  {history.map(session => (
                    <div key={session.id} className="border-b pb-4 last:border-0">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{session.subject}</h3>
                          <p className="text-gray-600">{session.tutor}</p>
                        </div>
                        <div className="text-right">
                          <p>{new Date(session.date).toLocaleDateString()}</p>
                          {!session.reviewed && (
                            <button className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded mt-1">
                              Leave Review
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tutor Dashboard */}
          <TabsContent value="tutor" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Schedule Management */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-teal-600" />
                    Schedule Management
                  </h2>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-md mb-4">
                  <p className="text-gray-600 mb-2">February 2025</p>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    <span className="text-xs text-gray-500">S</span>
                    <span className="text-xs text-gray-500">M</span>
                    <span className="text-xs text-gray-500">T</span>
                    <span className="text-xs text-gray-500">W</span>
                    <span className="text-xs text-gray-500">T</span>
                    <span className="text-xs text-gray-500">F</span>
                    <span className="text-xs text-gray-500">S</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {[...Array(28)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`
                          h-8 w-8 flex items-center justify-center rounded-full mx-auto
                          ${i === 24 ? 'bg-teal-600 text-white' : ''}
                          ${[2, 9, 16, 23].includes(i) ? 'border border-teal-600 text-teal-600' : ''}
                          ${![24, 2, 9, 16, 23].includes(i) ? 'text-gray-700 hover:bg-gray-200 cursor-pointer' : ''}
                        `}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition">
                  Update Availability
                </button>
              </div>

              {/* Messages for Tutor */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-teal-600" />
                    Messages
                  </h2>
                  <button className="text-teal-600 hover:underline text-sm">View All</button>
                </div>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Michael Johnson</h3>
                      <span className="text-xs text-gray-500">3 hours ago</span>
                    </div>
                    <p className="text-gray-600 truncate">I have a question about next week's session.</p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Sarah Williams</h3>
                      <span className="text-xs text-gray-500">1 day ago</span>
                    </div>
                    <p className="text-gray-600 truncate">Thank you for the excellent session!</p>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition">
                    Compose Message
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Earnings */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-teal-600" />
                    Earnings
                  </h2>
                  <button className="text-teal-600 hover:underline text-sm">View All</button>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-500">This month</p>
                    <p className="text-2xl font-bold">$485.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Last month</p>
                    <p className="text-xl">$512.00</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {earnings.map(earning => (
                    <div key={earning.id} className="border-b pb-4 last:border-0">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{earning.subject}</h3>
                          <p className="text-gray-600">{earning.student}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${earning.amount}.00</p>
                          <p className="text-xs text-gray-500">{new Date(earning.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Management */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <User className="mr-2 h-5 w-5 text-teal-600" />
                    Profile Management
                  </h2>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-2">
                    <User className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-lg">John Doe</h3>
                  <p className="text-gray-600">Mathematics Tutor</p>
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-gray-500 text-sm">Hourly Rate</p>
                    <p className="font-medium">$45.00</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Subjects</p>
                    <p className="font-medium">Mathematics, Physics, Computer Science</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Experience</p>
                    <p className="font-medium">8 years</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition">
                    Edit Profile
                  </button>
                  <button className="flex-1 border border-teal-600 text-teal-600 py-2 rounded-md hover:bg-teal-50 transition">
                    Update Pricing
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DashBoardPage;