import { X, Heart, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react';

interface Image {
  id: number;
  url: string;
  title: string;
  author: string;
  likes: number;
  comments: number;
}

interface ImageModalProps {
  image: Image;
  onClose: () => void;
  onShare: (platform: string, image: Image) => void;
}

export default function ImageModal({ image, onClose, onShare }: ImageModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="grid md:grid-cols-2">
          <div className="relative h-[60vh] md:h-[80vh]">
            <img
              src={image.url}
              alt={image.title}
              className="absolute w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{image.title}</h2>
              <p className="text-gray-600">by {image.author}</p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-red-500" />
                <span>{image.likes} likes</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-6 w-6 text-blue-500" />
                <span>{image.comments} comments</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Share</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => onShare('facebook', image)}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Facebook className="h-6 w-6" />
                </button>
                <button
                  onClick={() => onShare('twitter', image)}
                  className="text-gray-600 hover:text-blue-400"
                >
                  <Twitter className="h-6 w-6" />
                </button>
                <button
                  onClick={() => onShare('linkedin', image)}
                  className="text-gray-600 hover:text-blue-700"
                >
                  <Linkedin className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}