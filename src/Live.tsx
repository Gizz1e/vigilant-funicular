import { Radio, Users, Calendar } from 'lucide-react';

export default function Live() {
  const liveChannels = [
    {
      id: 1,
      name: 'Gizzle News 24/7',
      thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80',
      viewers: '12.5K',
      category: 'News',
      status: 'live',
    },
    {
      id: 2,
      name: 'Sports Central',
      thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80',
      viewers: '8.3K',
      category: 'Sports',
      status: 'live',
    },
    {
      id: 3,
      name: 'Music Live',
      thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80',
      viewers: '15.2K',
      category: 'Music',
      status: 'live',
    },
    {
      id: 4,
      name: 'Tech Talk',
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
      viewers: '5.7K',
      category: 'Technology',
      status: 'live',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Championship Finals',
      date: '2026-01-25',
      time: '20:00 EST',
      thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80',
    },
    {
      id: 2,
      title: 'Award Show Live',
      date: '2026-01-26',
      time: '19:00 EST',
      thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80',
    },
    {
      id: 3,
      title: 'Concert Special',
      date: '2026-01-27',
      time: '21:00 EST',
      thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              <Radio className="h-8 w-8 text-amber-400" />
              <h1 className="text-4xl font-bold text-white">Live TV</h1>
            </div>
            <span className="px-3 py-1 bg-blue-700 text-white text-sm font-semibold rounded-full animate-pulse">
              LIVE
            </span>
          </div>
          <p className="text-slate-400">Watch live broadcasts and upcoming events</p>
        </div>

        {/* Live Channels */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Live Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveChannels.map((channel) => (
              <div key={channel.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={channel.thumbnail}
                    alt={channel.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Live Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2 py-1 bg-blue-700 text-white text-xs font-bold rounded flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      LIVE
                    </span>
                    <span className="px-2 py-1 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-semibold rounded">
                      {channel.category}
                    </span>
                  </div>
                  {/* Viewer Count */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-slate-900/90 backdrop-blur-sm rounded text-white text-sm">
                    <Users className="h-4 w-4" />
                    <span>{channel.viewers}</span>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg font-semibold text-white shadow-lg transition-colors">
                      Watch Now
                    </button>
                  </div>
                </div>
                <h3 className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                  {channel.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-400 transition-colors cursor-pointer group"
              >
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-1 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-slate-800 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Set Reminder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-12 bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-900/40 rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <Radio className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Never Miss a Moment</h2>
            <p className="text-slate-300 mb-6">
              Get notifications for your favorite live events and channels. Set reminders to never miss what matters most to you.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-700 to-amber-400 hover:from-blue-800 hover:to-amber-500 rounded-lg font-semibold text-white shadow-lg transition-all">
              Enable Notifications
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
