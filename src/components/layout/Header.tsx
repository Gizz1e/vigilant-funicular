import { Link } from "react-router-dom";
import logo from "../../assets/logo_universal.jpeg";

const leftNavLinks = [
  { path: "/", label: "Home" },
  { path: "/live", label: "Live" },
  { path: "/about", label: "Community" },
];

const rightNavLinks = [
  { path: "/browse", label: "Models" },
  { path: "/library", label: "Videos" },
  { path: "/contact", label: "Buy Tokens" },
];

export default function Header() {
  return (
    <header className="bg-[rgb(0,24,72)] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 md:py-6">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-3">
            <img
              src={logo}
              alt="Gizzle TV logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-md shrink-0"
            />
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-[rgb(244,240,232)] whitespace-nowrap">
              Gizzle TV
            </span>
          </div>

          <nav className="flex justify-between items-center text-base md:text-lg text-[rgb(244,240,232)]">
            <div className="flex gap-6">
              {leftNavLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:text-[rgb(215,182,94)] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-6">
              {rightNavLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:text-[rgb(215,182,94)] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
