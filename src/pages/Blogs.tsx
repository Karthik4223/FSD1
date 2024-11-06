import React, { useState } from 'react';
import { mockBlogs } from '../data/mockData';

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);

  const handleBlogClick = (blogId: string) => {
    setSelectedBlog(selectedBlog === blogId ? null : blogId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="mt-2 text-gray-600">
            Latest insights and updates from our community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {mockBlogs.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleBlogClick(post.id)}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime} read</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {selectedBlog === post.id
                      ? post.content
                      : `${post.content.slice(0, 150)}...`}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="text-indigo-600 hover:text-indigo-800"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBlogClick(post.id);
                      }}
                    >
                      {selectedBlog === post.id ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}