import React, { useState } from 'react'
import Logo from './Logo'
import AppContainer from './AppContainer'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  const [userType, setUserType] = useState('learner')

  return (
      <div className="flex min-h-screen justify-center p-4">
        <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-sm my-8">
          <div className="mb-6 flex justify-center">
            <Logo className="h-12 w-auto" />
          </div>
          
          <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Create an account</h1>
          
          <div className="mb-6">
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={() => setUserType('learner')}
                className={`rounded-md px-6 py-2 text-sm font-medium ${
                  userType === 'learner'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                I need a tutor
              </button>
              <button
                type="button"
                onClick={() => setUserType('tutor')}
                className={`rounded-md px-6 py-2 text-sm font-medium ${
                  userType === 'tutor'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                I am a tutor
              </button>
            </div>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  placeholder="••••••••"
                />
              </div>
              
              <div>
                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  placeholder="••••••••"
                />
              </div>
              
              <div>
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  placeholder="+1234567890"
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp_number" className="block text-sm font-medium text-gray-700">
                  WhatsApp Number
                </label>
                <input
                  id="whatsapp_number"
                  name="whatsapp_number"
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  placeholder="+1234567890"
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  placeholder="City, Country"
                />
              </div>
              
              <div>
                <label htmlFor="profile_image" className="block text-sm font-medium text-gray-700">
                  Profile Image
                </label>
                <input
                  id="profile_image"
                  name="profile_image"
                  type="file"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-teal-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-teal-700 hover:file:bg-teal-100"
                />
              </div>
            </div>
            
            {userType === 'tutor' && (
              <div className="space-y-4 border-t border-gray-200 pt-4">
                <h2 className="text-lg font-medium text-gray-800">Tutor Profile</h2>
                
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                    placeholder="Tell us about yourself and your expertise..."
                  />
                </div>
                
                <div>
                  <label htmlFor="years_of_experience" className="block text-sm font-medium text-gray-700">
                    Years of Experience
                  </label>
                  <input
                    id="years_of_experience"
                    name="years_of_experience"
                    type="number"
                    required
                    min="0"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Availability Status
                  </label>
                  <div className="mt-1 space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="availability_status"
                        value="available"
                        defaultChecked
                        className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Available</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="availability_status"
                        value="busy"
                        className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Busy</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Categories
                  </label>
                  <div className="mt-1 grid grid-cols-2 gap-2 md:grid-cols-3">
                    {['Mathematics', 'Science', 'English', 'History', 'Computer Science', 'Languages'].map((category) => (
                      <label key={category} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="categories"
                          value={category.toLowerCase()}
                          className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
                  Privacy Policy
                </a>
              </label>
            </div>
            
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Create Account
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/sign-in" className="font-medium text-teal-600 hover:text-teal-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
  )
}

export default SignupPage