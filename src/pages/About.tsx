import { Tv, Users, Globe, Award } from 'lucide-react';
import { brandName } from '../config/theme';

export default function About() {
  const stats = [
    { icon: Users, label: 'Active Users', value: '10M+' },
    { icon: Globe, label: 'Countries', value: '150+' },
    { icon: Tv, label: 'Hours of Content', value: '100K+' },
    { icon: Award, label: 'Awards Won', value: '50+' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Content',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    },
    {
      name: 'David Kim',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-500 to-amber-400 bg-clip-text text-transparent">{brandName}</span>
            </h1>
            <p className="text-xl text-slate-300">
              We're revolutionizing the way people consume entertainment, bringing the world's best content to your fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center"
            >
              <stat.icon className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              At {brandName}, we believe that everyone deserves access to quality entertainment, no matter where they are or what device they're using. Our mission is to break down barriers and make streaming accessible, affordable, and enjoyable for all.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              We're committed to supporting content creators, delivering cutting-edge technology, and fostering a community that celebrates diverse voices and perspectives from around the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-400 transition-colors"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-slate-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-900/40 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
            <p className="text-slate-300">
              We constantly push boundaries and embrace new technologies to deliver the best streaming experience.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-900/40 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
            <p className="text-slate-300">
              We're committed to providing high-quality content and exceptional user experiences at every touchpoint.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-900/40 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Community</h3>
            <p className="text-slate-300">
              We build meaningful connections between creators and viewers, fostering a vibrant global community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
