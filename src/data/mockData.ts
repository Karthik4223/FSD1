import { User, Course, BlogPost } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
  role: 'student',
  enrolledCourses: ['1', '2']
};

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    instructor: 'Sarah Johnson',
    description: 'Learn the basics of web development including HTML, CSS, and JavaScript. This comprehensive course covers everything from basic syntax to advanced concepts like responsive design and modern JavaScript features.',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    price: 49.99,
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.8,
    enrolled: 1250,
    progress: '60%'
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    instructor: 'Michael Chen',
    description: 'Master advanced React concepts and patterns for building scalable applications. Learn about hooks, context, performance optimization, and architectural patterns used in production applications.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    price: 79.99,
    duration: '10 weeks',
    level: 'Advanced',
    rating: 4.9,
    enrolled: 850,
    progress: '30%'
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    instructor: 'Emma Wilson',
    description: 'Learn modern UI/UX design principles and create stunning user interfaces. This course covers design thinking, user research, wireframing, prototyping, and modern design tools.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60',
    price: 59.99,
    duration: '6 weeks',
    level: 'Intermediate',
    rating: 4.7,
    enrolled: 980,
    progress: '0%'
  }
];

export const mockBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Online Learning',
    author: 'David Brown',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    date: '2024-03-15',
    content: `The landscape of online education is rapidly evolving with emerging technologies and innovative teaching methods. Artificial Intelligence and Machine Learning are revolutionizing personalized learning experiences, adapting to each student's pace and style.

    Virtual Reality (VR) and Augmented Reality (AR) are creating immersive learning environments, allowing students to experience complex concepts in 3D space. This is particularly valuable in fields like medicine, engineering, and architecture.
    
    Furthermore, blockchain technology is being explored for secure credential verification and micro-credentials, making education more modular and accessible.
    
    The future of education will likely be hybrid, combining the best of both online and traditional learning methods, creating a more flexible and effective learning experience for students worldwide.`,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60',
    readTime: '5 min',
    tags: ['Education', 'Technology', 'Future']
  },
  {
    id: '2',
    title: 'Best Practices for Remote Learning',
    author: 'Lisa Anderson',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    date: '2024-03-10',
    content: `Remote learning requires a different approach compared to traditional classroom education. Here are key strategies for success:

    1. Create a Dedicated Study Space
    - Set up a quiet, well-lit area
    - Ensure good internet connectivity
    - Use proper ergonomic furniture
    
    2. Time Management
    - Establish a regular schedule
    - Use time-blocking techniques
    - Take regular breaks
    
    3. Active Participation
    - Engage in online discussions
    - Ask questions during live sessions
    - Collaborate with peers virtually
    
    4. Stay Motivated
    - Set clear goals
    - Track your progress
    - Celebrate small wins
    
    Remember, successful remote learning is about finding the right balance between flexibility and structure.`,
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&auto=format&fit=crop&q=60',
    readTime: '8 min',
    tags: ['Study Tips', 'Remote Learning']
  },
  {
    id: '3',
    title: 'The Rise of Microlearning',
    author: 'James Wilson',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    date: '2024-03-08',
    content: `Microlearning is revolutionizing how we acquire new skills in the digital age. This approach breaks down complex topics into bite-sized, manageable chunks that can be learned in 5-10 minutes.

    Benefits of Microlearning:
    - Higher engagement rates
    - Better information retention
    - Flexible learning schedule
    - Immediate application of knowledge
    
    Real-world applications include:
    - Corporate training
    - Language learning
    - Technical skill development
    - Professional certifications
    
    As attention spans decrease and the need for continuous learning increases, microlearning provides an effective solution for modern learners.`,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60',
    readTime: '6 min',
    tags: ['Microlearning', 'EdTech', 'Innovation']
  }
];