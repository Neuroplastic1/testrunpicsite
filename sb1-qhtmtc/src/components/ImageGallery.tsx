import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, X, Facebook, Twitter, Linkedin } from 'lucide-react';
import ImageModal from './ImageModal';
import toast from 'react-hot-toast';

interface Image {
  id: number;
  url: string;
  title: string;
  author: string;
  likes: number;
  comments: number;
}

const authors = [
  'Bark Twain',
  'Virginia Woof',
  'Charles Barkens',
  'William Shakespaw',
  'Jane Pawsten'
];

export default function ImageGallery() {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/9');
        const data = await response.json();
        
        const formattedImages = data.message.map((url: string, index: number) => ({
          id: index + 1,
          url,
          title: `Adorable Dog ${index + 1}`,
          author: authors[Math.floor(Math.random() * authors.length)],
          likes: Math.floor(Math.random() * 500),
          comments: Math.floor(Math.random() * 50)
        }));
        
        setImages(formattedImages);
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    };

    fetchDogImages();
  }, []);

  const handleShare = (platform: string, image: Image) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this amazing photo: ${image.title}`);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    toast.success(`Sharing on ${platform}!`);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Discover Amazing Dogs</h1>
        <p className="mt-2 text-gray-600">Explore and share adorable dog photos from our community</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <ImageCard 
            key={image.id} 
            image={image} 
            onImageClick={() => setSelectedImage(image)}
            onShare={handleShare}
          />
        ))}
      </div>

      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)}
          onShare={handleShare}
        />
      )}
    </div>
  );
}

function ImageCard({ image, onImageClick, onShare }: { 
  image: Image; 
  onImageClick: () => void;
  onShare: (platform: string, image: Image) => void;
}) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative cursor-pointer" onClick={onImageClick}>
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-64 object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{image.title}</h3>
        <p className="text-sm text-gray-600">by {image.author}</p>
        
        <div className="flex items-center justify-between mt-4">
          <button 
            className={`flex items-center space-x-1 ${liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
            <span>{liked ? image.likes + 1 : image.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
            <MessageCircle className="h-5 w-5" />
            <span>{image.comments}</span>
          </button>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => onShare('facebook', image)}
              className="text-gray-600 hover:text-blue-600"
            >
              <Facebook className="h-5 w-5" />
            </button>
            <button 
              onClick={() => onShare('twitter', image)}
              className="text-gray-600 hover:text-blue-400"
            >
              <Twitter className="h-5 w-5" />
            </button>
            <button 
              onClick={() => onShare('linkedin', image)}
              className="text-gray-600 hover:text-blue-700"
            >
              <Linkedin className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}