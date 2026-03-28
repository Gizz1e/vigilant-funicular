import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, User, Bell } from 'lucide-react';
import { brandName } from '../../config/theme';
import logo from '../../assets/logo_universal.jpeg';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
  { path: "/", label: "Home" },
  { path: "/browse", label: "Models" },
  { path: "/live", label: "Live" },
  { path: "/library", label: "Videos" },
  { path: "/about", label: "Community" },
  { path: "/contact", label: "Buy Tokens" },
];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-blue-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <img
              src={logo}
              alt="Gizzle TV Universal logo"
              className="h-10 w-10 rounded-md object-cover ring-1 ring-amber-300/40"
            />
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 via-white to-amber-300 bg-clip-text text-transparent truncate">
              {brandName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
