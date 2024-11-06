export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'instructor';
  enrolledCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  thumbnail: string;
  price: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  enrolled: number;
  progress?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  date: string;
  content: string;
  image: string;
  readTime: string;
  tags: string[];
}