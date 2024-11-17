import { Calendar, User, ThumbsUp, MessageSquare } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
}

const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Street Photography',
    excerpt: 'Discover the secrets behind capturing compelling street photographs that tell powerful stories...',
    author: 'Emma Wilson',
    date: '2024-03-15',
    likes: 127,
    comments: 23
  },
  {
    id: 2,
    title: 'Mastering Natural Light',
    excerpt: 'Learn how to use natural light to create stunning portraits and landscape photographs...',
    author: 'David Chen',
    date: '2024-03-14',
    likes: 95,
    comments: 18
  },
  {
    id: 3,
    title: 'Digital vs Film Photography',
    excerpt: 'An in-depth comparison of digital and film photography, exploring the pros and cons...',
    author: 'Sarah Miller',
    date: '2024-03-13',
    likes: 156,
    comments: 31
  }
];

export default function Blogs() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Photography Blog</h1>
        <p className="mt-2 text-gray-600">Insights, tutorials, and stories from our community</p>
      </div>

      <div className="space-y-6">
        {samplePosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        {post.title}
      </h2>
      
      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          {post.author}
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {post.date}
        </div>
      </div>

      <p className="text-gray-600 mb-4">{post.excerpt}</p>

      <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
          <ThumbsUp className="h-5 w-5" />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
          <MessageSquare className="h-5 w-5" />
          <span>{post.comments}</span>
        </button>
      </div>
    </article>
  );
}