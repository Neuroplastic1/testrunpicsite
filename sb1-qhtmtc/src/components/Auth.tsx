import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Github, Twitter } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/gallery');
  };

  const handleSocialLogin = (provider: string) => {
    toast.success(`Logging in with ${provider}`);
    login('demo@example.com', 'password');
    navigate('/gallery');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-gray-600 mt-2">
          {isLogin
            ? 'Sign in to continue to Pictoramica'
            : 'Join our creative community today'}
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <button
          onClick={() => handleSocialLogin('Google')}
          className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <button
          onClick={() => handleSocialLogin('GitHub')}
          className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800"
        >
          <Github className="h-5 w-5" />
          <span>Continue with GitHub</span>
        </button>

        <button
          onClick={() => handleSocialLogin('Twitter')}
          className="w-full flex items-center justify-center space-x-2 bg-blue-400 text-white px-4 py-3 rounded-lg hover:bg-blue-500"
        >
          <Twitter className="h-5 w-5" />
          <span>Continue with Twitter</span>
        </button>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {!isLogin && (
          <div>
            <label className="input-label" htmlFor="name">
              Full Name
            </label>
            <div className="input-group">
              <User className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="name"
                className="input-field"
                placeholder="John Doe"
              />
            </div>
          </div>
        )}

        <div>
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <div className="input-group">
            <Mail className="h-5 w-5 text-gray-400" />
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <div className="input-group">
            <Lock className="h-5 w-5 text-gray-400" />
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          {isLogin ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  );
}