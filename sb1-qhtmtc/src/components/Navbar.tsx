import { Link } from 'react-router-dom';
import { Camera, BookOpen, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Pictoramica</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/gallery" className="nav-link">
              <Camera className="h-5 w-5" />
              <span>Gallery</span>
            </Link>
            <Link to="/blogs" className="nav-link">
              <BookOpen className="h-5 w-5" />
              <span>Blogs</span>
            </Link>
            <Link to="/shop" className="nav-link">
              <ShoppingBag className="h-5 w-5" />
              <span>Shop</span>
            </Link>
            <Link to="/auth" className="nav-link">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}