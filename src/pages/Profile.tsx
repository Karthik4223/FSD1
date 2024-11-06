import React, { useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockCourses } from '../data/mockData';
import { Camera } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const enrolledCourses = mockCourses.filter((course) =>
    user?.enrolledCourses.includes(course.id)
  );

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically upload the image to a server
      // For now, we'll just log it
      console.log('New profile image selected:', file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <button
                  onClick={handleImageClick}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <Camera className="h-6 w-6 text-white" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
                <p className="text-gray-600">{user?.email}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  {user?.role}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">My Courses</h2>
              {enrolledCourses.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">You haven't enrolled in any courses yet.</p>
                  <a href="/courses" className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block">
                    Browse Courses
                  </a>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {enrolledCourses.map((course) => (
                    <div
                      key={course.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex space-x-4">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-24 h-24 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-sm text-gray-600">
                            Instructor: {course.instructor}
                          </p>
                          <div className="mt-2">
                            <div className="relative pt-1">
                              <div className="flex mb-2 items-center justify-between">
                                <div>
                                  <span className="text-xs font-semibold inline-block text-indigo-600">
                                    Progress
                                  </span>
                                </div>
                                <div className="text-right">
                                  <span className="text-xs font-semibold inline-block text-indigo-600">
                                    {course.progress || '0%'}
                                  </span>
                                </div>
                              </div>
                              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                                <div
                                  style={{ width: course.progress || '0%' }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}