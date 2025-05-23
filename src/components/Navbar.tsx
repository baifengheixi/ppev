'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-transparent text-white z-50">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Company name removed as requested */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 w-auto min-w-[600px] justify-between py-3">
            <NavLink href="/" label="Home" />
            <NavLink href="/customers" label="Customers" />
            <NavLink href="/about" label="About Us" />
            <NavLink href="/contact" label="Contact" />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="/" label="Home" onClick={toggleMenu} />
              <MobileNavLink href="/customers" label="Customers" onClick={toggleMenu} />
              <MobileNavLink href="/about" label="About Us" onClick={toggleMenu} />
              <MobileNavLink href="/contact" label="Contact" onClick={toggleMenu} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// NavLink component for desktop navigation
const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="hover:text-secondary transition-colors text-lg font-medium px-2 py-1 text-secondary"
    >
      {label}
    </Link>
  );
};

// MobileNavLink component for mobile navigation
const MobileNavLink = ({
  href,
  label,
  onClick
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      className="block py-2 hover:text-secondary transition-colors text-secondary"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;
