import { Menu, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import path from "path";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/sign-in", label: "Sign In", highlight: false },
    { path: "/sign-up", label: "Sign Up", highlight: true },
    { path: "/tutor-finder-page", label: "Tutor's Page"},
    { path: "/dash-board-page", label: "DashBoard"},
    { path: "/gigs-dash", label: "TutorFinderDashBoard"},
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo & Brand */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  item.highlight
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : index === navItems.length - 2
                    ? "border border-teal-600 text-teal-600 hover:bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`block px-4 py-2 text-base font-medium ${
                item.highlight
                  ? "bg-teal-600 text-white"
                  : index === navItems.length - 2
                  ? "border-l-4 border-teal-600 text-teal-600 bg-teal-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-teal-600"
              }`}
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
