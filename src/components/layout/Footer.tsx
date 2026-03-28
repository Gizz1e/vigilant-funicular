import { Link } from "react-router-dom";
import logo from "../../assets/logo_universal.jpeg";

export default function Footer() {
  const footerLinks = {
    Platform: [
      { label: "Models", path: "/browse" },
      { label: "Live", path: "/live" },
      { label: "Videos", path: "/library" },
      { label: "Community", path: "/about" },
    ],
    Support: [
      { label: "Contact", path: "/contact" },
      { label: "Privacy Policy", path: "/contact" },
      { label: "Terms of Service", path: "/contact" },
    ],
    Creator: [
      { label: "Model Sign Up", path: "/contact" },
      { label: "Buy Tokens", path: "/contact" },
      { label: "Support Center", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-black border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Gizzle TV logo"
                className="w-14 h-14 object-contain rounded-md"
              />
              <div>
                <h3 className="text-2xl font-bold text-[rgb(244,240,232)]">
                  Gizzle TV LLC
                </h3>
                <p className="text-sm text-[rgb(160,168,186)] mt-1">
                  Premium live streaming platform for creators and community
                  members.
                </p>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-lg font-semibold text-[rgb(215,182,94)] mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-[rgb(160,168,186)] hover:text-[rgb(244,240,232)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[rgb(160,168,186)]">
            © 2026 Gizzle TV LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm">
            <Link
              to="/contact"
              className="text-[rgb(160,168,186)] hover:text-[rgb(244,240,232)] transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              to="/contact"
              className="text-[rgb(160,168,186)] hover:text-[rgb(244,240,232)] transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              to="/contact"
              className="text-[rgb(160,168,186)] hover:text-[rgb(244,240,232)] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
