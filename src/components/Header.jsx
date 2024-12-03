import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import PopupNewsletter from "./PopupNewsletter";

export default function Header() {
  const location = useLocation();
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path
      ? "text-indigo-600"
      : "text-gray-600 hover:text-indigo-600";
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Mail className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">EmailPro</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link to="/" className={isActive("/")}>
                Home
              </Link>
              <Link to="/articles" className={isActive("/articles")}>
                Articles
              </Link>
              <Link to="/services" className={isActive("/services")}>
                Services
              </Link>
              <Link to="/about" className={isActive("/about")}>
                About
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsNewsletterOpen(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-indigo-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className={`block px-3 py-2 rounded-md ${isActive(
                    "/"
                  )} text-base font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/articles"
                  className={`block px-3 py-2 rounded-md ${isActive(
                    "/articles"
                  )} text-base font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Articles
                </Link>
                <Link
                  to="/services"
                  className={`block px-3 py-2 rounded-md ${isActive(
                    "/services"
                  )} text-base font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className={`block px-3 py-2 rounded-md ${isActive(
                    "/about"
                  )} text-base font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <PopupNewsletter
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </>
  );
}
