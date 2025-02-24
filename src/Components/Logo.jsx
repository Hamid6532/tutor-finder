import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link to="/" className="flex items-center">
        <svg
          className="h-8 w-8 text-teal-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-2 text-2xl font-bold text-gray-900">
          Tutor<span className="text-teal-600">Finder</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
