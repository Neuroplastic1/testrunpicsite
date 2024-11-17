import { ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  artist: string;
  category: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Mountain Sunrise Print',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    artist: 'John Doe',
    category: 'Landscape'
  },
  {
    id: 2,
    name: 'Ocean Waves Canvas',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1682687221038-404670f05144',
    artist: 'Jane Smith',
    category: 'Seascape'
  },
  {
    id: 3,
    name: 'Urban Night Scene',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    artist: 'Mike Johnson',
    category: 'Urban'
  }
];

export default function Shop() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Photography Shop</h1>
        <p className="mt-2 text-gray-600">Purchase stunning prints from our talented photographers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:text-red-500">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">by {product.artist}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          <button className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}