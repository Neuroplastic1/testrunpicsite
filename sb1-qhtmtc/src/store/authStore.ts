import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
  } | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (email, password) => {
    // Simulate authentication
    set({
      isAuthenticated: true,
      user: {
        name: 'Demo User',
        email: email
      }
    });
  },
  logout: () => {
    set({
      isAuthenticated: false,
      user: null
    });
  }
}));