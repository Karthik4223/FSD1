import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockCourses } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { Clock, Users, BarChart, Star } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, enrollInCourse } = useAuth();
  
  const course = mockCourses.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Course not found</p>
      </div>
    );
  }

  const isEnrolled = user?.enrolledCourses.includes(course.id);

  const handleEnroll = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    enrollInCourse(course.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">
                {course.title}
              </h1>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-gray-600">Instructor</p>
                  <p className="font-semibold">{course.instructor}</p>
                </div>
              </div>
              
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{course.enrolled} students</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">About this course</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-gray-900">
                    ${course.price}
                  </span>
                </div>
                <button
                  onClick={handleEnroll}
                  className={`px-6 py-3 rounded-md text-lg font-semibold ${
                    isEnrolled
                      ? 'bg-green-600 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                  disabled={isEnrolled}
                >
                  {isEnrolled ? 'Already Enrolled' : 'Enroll Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}