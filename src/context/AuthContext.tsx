import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';
import { mockUser } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (name: string, email: string, password: string) => void;
  enrollInCourse: (courseId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(mockUser);

  const login = (email: string, password: string) => {
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const signup = (name: string, email: string, password: string) => {
    setUser({
      ...mockUser,
      name,
      email,
    });
  };

  const enrollInCourse = (courseId: string) => {
    if (user && !user.enrolledCourses.includes(courseId)) {
      setUser({
        ...user,
        enrolledCourses: [...user.enrolledCourses, courseId],
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, enrollInCourse }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}