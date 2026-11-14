import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (itemPath: string) => {
    if (itemPath === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(itemPath);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-[#E9E8F8]/95 backdrop-blur-md border-b border-[#8DB9F0]/30 transition-shadow duration-300 ${
          scrolled ? 'shadow-xs' : ''
        }`}
      >
        <nav className="flex items-center justify-between px-6 lg:px-12 py-4 max-w-7xl mx-auto w-full">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="font-['Inter',sans-serif] font-semibold text-sm tracking-[0.16em] text-[#171E2B] uppercase hover:text-[#8DB9F0] transition-colors"
          >
            RAJA BABU
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-['Inter',sans-serif] text-[13px] tracking-wide transition-all relative py-1 ${
                      active
                        ? 'text-[#171E2B] font-semibold'
                        : 'text-[#171E2B]/70 hover:text-[#171E2B] font-normal'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8DB9F0] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Download CV */}
            <a
              href={profile.cvPath}
              download="Raja_Babu_CV.pdf"
              className="text-[12px] font-medium border border-[#8DB9F0] bg-[#8DB9F0]/25 text-[#171E2B] px-4 py-2 hover:bg-[#8DB9F0] transition-colors font-['Inter',sans-serif] rounded-sm tracking-wide"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-1"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#171E2B] transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#171E2B] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#171E2B] transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#E9E8F8] transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pt-16">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`font-['Inter',sans-serif] text-[20px] tracking-wide transition-colors ${
                  active
                    ? 'text-[#171E2B] font-semibold border-b-2 border-[#8DB9F0] pb-1'
                    : 'text-[#171E2B]/70 hover:text-[#171E2B]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href={profile.cvPath}
            download="Raja_Babu_CV.pdf"
            onClick={() => setMobileOpen(false)}
            className="mt-6 text-[14px] font-semibold bg-[#8DB9F0] text-[#171E2B] border border-[#8DB9F0] px-7 py-3 hover:bg-[#8DB9F0]/80 transition-colors font-['Inter',sans-serif] rounded-sm tracking-wide shadow-xs"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
