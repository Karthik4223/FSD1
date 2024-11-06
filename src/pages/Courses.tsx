import React from 'react';
import { mockCourses } from '../data/mockData';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Available Courses</h1>
          <p className="mt-2 text-gray-600">
            Explore our wide range of courses taught by expert instructors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{course.title}</h2>
                  <span className="inline-flex items-center bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">
                    {course.rating} ({course.enrolled} students)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      ${course.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      {course.duration}
                    </span>
                  </div>
                  <button 
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/courses/${course.id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}