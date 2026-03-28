import { BookMarked, Clock, Heart, PlaySquare, Trash2 } from 'lucide-react';

export default function Library() {
  const watchLater = [
    {
      id: 1,
      title: 'Tech Revolution Documentary',
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
      duration: '45:30',
      addedDate: '2026-01-20',
    },
    {
      id: 2,
      title: 'Cooking Masterclass',
      thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80',
      duration: '32:15',
      addedDate: '2026-01-19',
    },
    {
      id: 3,
      title: 'Adventure Travel Guide',
      thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80',
      duration: '28:45',
      addedDate: '2026-01-18',
    },
  ];

  const favorites = [
    {
      id: 1,
      title: 'Space Exploration Series',
      thumbnail: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&q=80',
      episodes: 12,
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Wildlife Wonders',
      thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
      episodes: 8,
      rating: 4.8,
    },
    {
      id: 3,
      title: 'History Uncovered',
      thumbnail: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&q=80',
      episodes: 10,
      rating: 4.7,
    },
  ];

  const watchHistory = [
    {
      id: 1,
      title: 'Morning News Briefing',
      thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80',
      watchedDate: '2026-01-22',
      progress: 100,
    },
    {
      id: 2,
      title: 'Comedy Stand-up Special',
      thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
      watchedDate: '2026-01-21',
      progress: 75,
    },
    {
      id: 3,
      title: 'Sports Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80',
      watchedDate: '2026-01-21',
      progress: 100,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BookMarked className="h-8 w-8 text-amber-400" />
            <h1 className="text-4xl font-bold text-white">My Library</h1>
          </div>
          <p className="text-slate-400">Access your saved content and watch history</p>
        </div>

        {/* Watch Later */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Watch Later</h2>
            </div>
            <button className="text-slate-400 hover:text-white text-sm transition-colors">
              Clear All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {watchLater.map((item) => (
              <div key={item.id} className="group relative">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                      <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <PlaySquare className="h-5 w-5 text-white ml-1" fill="white" />
                  </button>
                </div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  Added {new Date(item.addedDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Favorites */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Favorites</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-400 transition-colors cursor-pointer group"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{item.episodes} episodes</span>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4 fill-red-500 text-amber-400" />
                      <span className="text-white font-semibold">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Watch History */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Watch History</h2>
            </div>
            <button className="text-slate-400 hover:text-white text-sm transition-colors">
              Clear History
            </button>
          </div>
          <div className="space-y-4">
            {watchHistory.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-amber-400 transition-colors cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-40 h-24 object-cover rounded-lg"
                  />
                  {item.progress < 100 && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700 rounded-b-lg overflow-hidden">
                      <div
                        className="h-full bg-blue-700"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-2">
                    Watched on {new Date(item.watchedDate).toLocaleDateString()}
                  </p>
                  {item.progress < 100 && (
                    <p className="text-sm text-slate-300">
                      {item.progress}% complete
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors">
                    <PlaySquare className="h-5 w-5 text-white" />
                  </button>
                  <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
