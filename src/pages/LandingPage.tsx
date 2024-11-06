import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, BookOpen, Users, Trophy } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Future with Online Learning
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Access world-class education from anywhere in the world
            </p>
            <Link
              to="/signup"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
              <p className="text-gray-600">Learn from industry professionals</p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Learning</h3>
              <p className="text-gray-600">Connect with peers worldwide</p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Learning</h3>
              <p className="text-gray-600">Earn recognized certificates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}