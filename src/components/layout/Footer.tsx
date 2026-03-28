import { Link } from 'react-router-dom';
import { brandName, brandTagline } from '../../config/theme';
import logo from '../../assets/logo_universal.jpeg';

export default function Footer() {
  const footerLinks = {
    Company: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press', path: '/press' },
      { label: 'Contact', path: '/contact' },
    ],
    Support: [
      { label: 'Help Center', path: '/help' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
    ],
    Features: [
      { label: 'Browse Content', path: '/browse' },
      { label: 'Live TV', path: '/live' },
      { label: 'My Library', path: '/library' },
      { label: 'Watch History', path: '/history' },
    ],
  };

  return (
    <footer className="bg-black border-t border-blue-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Gizzle TV Universal logo"
                className="h-12 w-12 rounded-md object-cover ring-1 ring-amber-300/40"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-white to-amber-300 bg-clip-text text-transparent">
                {brandName}
              </span>
            </div>
            <p className="text-slate-400 mb-4 max-w-sm">
              {brandTagline}. Your premium destination for creator-first streaming across every device.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-400 hover:text-amber-300 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
