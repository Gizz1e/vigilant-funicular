import { useState } from 'react';
import { Search, Grid, List, Play, Clock, Eye } from 'lucide-react';

export default function Browse() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'action', 'comedy', 'drama', 'documentary', 'sports', 'music'];

  const content = [
    {
      id: 1,
      title: 'Adventure Quest',
      thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
      duration: '45:30',
      views: '1.2M',
      category: 'action',
      description: 'Epic adventure through uncharted territories',
    },
    {
      id: 2,
      title: 'Comedy Night Special',
      thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
      duration: '32:15',
      views: '890K',
      category: 'comedy',
      description: 'Stand-up comedy that will make you laugh',
    },
    {
      id: 3,
      title: 'Drama Series Finale',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80',
      duration: '58:45',
      views: '2.1M',
      category: 'drama',
      description: 'The emotional conclusion to the beloved series',
    },
    {
      id: 4,
      title: 'Nature Documentary',
      thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
      duration: '42:20',
      views: '1.5M',
      category: 'documentary',
      description: 'Explore the wonders of the natural world',
    },
    {
      id: 5,
      title: 'Championship Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80',
      duration: '35:10',
      views: '3.2M',
      category: 'sports',
      description: 'Best moments from the championship game',
    },
    {
      id: 6,
      title: 'Live Concert Experience',
      thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80',
      duration: '68:30',
      views: '950K',
      category: 'music',
      description: 'Amazing live performance from top artists',
    },
  ];

  const filteredContent = selectedCategory === 'all'
    ? content
    : content.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Browse Content</h1>
          <p className="text-slate-400">Discover amazing content from all categories</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search content..."
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                    selectedCategory === category
                      ? 'bg-blue-700 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list'
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-400">
            Showing <span className="text-white font-semibold">{filteredContent.length}</span> results
          </p>
        </div>

        {/* Content Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredContent.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{item.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Play className="h-5 w-5 text-white ml-1" fill="white" />
                  </button>
                  <span className="absolute top-3 left-3 px-2 py-1 bg-slate-900/90 backdrop-blur-sm rounded text-xs font-semibold text-white capitalize">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-amber-400 transition-colors cursor-pointer group"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-48 h-28 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-slate-800 rounded text-xs font-semibold text-slate-300 capitalize">
                        {item.category}
                      </span>
                    </div>
                    <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors">
                      <Play className="h-5 w-5 text-white" fill="white" />
                    </button>
                  </div>
                  <p className="text-slate-400 mb-3">{item.description}</p>
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{item.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
