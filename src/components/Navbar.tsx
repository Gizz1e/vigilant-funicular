import React from "react";

const navItems = ["Models", "Community", "Live", "Videos", "Buy Tokens"];

export default function Navbar() {
  return (
    <header className="bg-black border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 md:py-6">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-3">
            <img
              src="/logo_universal.jpeg"
              alt="Gizzle TV logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-md shrink-0"
            />
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-[rgb(244,240,232)] whitespace-nowrap">
              Gizzle TV
            </span>
          </div>

          <nav className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-8 text-base md:text-lg text-[rgb(244,240,232)]">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-center hover:text-[rgb(215,182,94)] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
