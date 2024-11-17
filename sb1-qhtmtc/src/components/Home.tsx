import { Camera, BookOpen, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Share Your Creative Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your all-in-one platform for sharing photos, writing blogs, and selling your creations
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Camera className="h-8 w-8" />}
          title="Photo Gallery"
          description="Share your photography and visual art with the world"
          link="/gallery"
        />
        <FeatureCard
          icon={<BookOpen className="h-8 w-8" />}
          title="Blog Posts"
          description="Write about your creative process and experiences"
          link="/blogs"
        />
        <FeatureCard
          icon={<ShoppingBag className="h-8 w-8" />}
          title="Creative Shop"
          description="Sell your artwork and creations to a global audience"
          link="/shop"
        />
      </div>

      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Creative Community</h2>
        <Link
          to="/auth"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link to={link} className="block">
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="text-indigo-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}