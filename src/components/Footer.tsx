import React from 'react';
import { Link } from 'react-router-dom';
import { PenSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center gap-2 mb-4 md:mb-0">
            <PenSquare className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">BlogSpace</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-600 hover:text-indigo-600">Terms</Link>
            <Link to="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © 2024 BlogSpace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}