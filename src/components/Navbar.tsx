import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Layout, BookMarked, User } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">E-Learn</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/courses" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <Layout className="h-5 w-5" />
              <span>Courses</span>
            </Link>
            <Link to="/blogs" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <BookMarked className="h-5 w-5" />
              <span>Blogs</span>
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={logout}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
                <Link
                  to="/signup"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}