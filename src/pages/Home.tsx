import { Play, TrendingUp, Clock, Star } from 'lucide-react';
import { brandName, brandTagline } from '../config/theme';

export default function Home() {
  const featuredContent = [
    {
      id: 1,
      title: 'Epic Adventure Chronicles',
      description: 'Join the journey of a lifetime in this thrilling series',
      thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
      category: 'Action',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Mystery of the Lost City',
      description: 'Uncover ancient secrets in this gripping documentary',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
      category: 'Documentary',
      rating: 4.6,
    },
    {
      id: 3,
      title: 'Comedy Central Live',
      description: 'The best stand-up comedy from around the world',
      thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
      category: 'Comedy',
      rating: 4.7,
    },
  ];

  const trendingNow = [
    { id: 1, title: 'Tech Revolution 2024', views: '2.4M', duration: '45:30' },
    { id: 2, title: 'Space Explorers', views: '1.8M', duration: '52:15' },
    { id: 3, title: 'Culinary Masters', views: '1.5M', duration: '38:45' },
    { id: 4, title: 'Wildlife Wonders', views: '1.2M', duration: '41:20' },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-blue-500 to-amber-400 bg-clip-text text-transparent">{brandName}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              {brandTagline}. Unlimited entertainment across all your devices.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-700 to-amber-400 hover:from-blue-800 hover:to-amber-500 rounded-lg font-semibold shadow-lg shadow-blue-950/40 transition-all flex items-center gap-2">
                <Play className="h-5 w-5" />
                Start Watching
              </button>
              <button className="px-8 py-3 bg-slate-800/80 hover:bg-slate-700 rounded-lg font-semibold backdrop-blur-sm border border-slate-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredContent.map((content) => (
            <div key={content.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src={content.thumbnail}
                  alt={content.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-700 rounded-full text-xs font-semibold">
                        {content.category}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-semibold">{content.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Play className="h-6 w-6 text-white ml-1" fill="white" />
                </button>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">
                {content.title}
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2">{content.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="h-6 w-6 text-amber-400" />
          <h2 className="text-3xl font-bold text-white">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingNow.map((item, index) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-amber-400 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-4xl font-bold text-amber-400">#{index + 1}</span>
                <div className="flex items-center gap-1 text-slate-400 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{item.duration}</span>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.views} views</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Action', 'Comedy', 'Drama', 'Documentary', 'Sports', 'Music'].map((category) => (
            <button
              key={category}
              className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-lg hover:border-amber-400 hover:from-blue-950/40 hover:to-slate-800 transition-all"
            >
              <span className="text-white font-semibold">{category}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
