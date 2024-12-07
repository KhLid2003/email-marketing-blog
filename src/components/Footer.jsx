import React from "react";
import { Link } from "react-router-dom";
import { PenSquare } from "lucide-react";
import FooterSubscribe from "./FooterSubscribe";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <PenSquare className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">BlogSpace</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your ultimate resource for mastering email marketing with expert
              insights and strategies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link
                to="/terms"
                className="block text-gray-600 hover:text-indigo-600"
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                className="block text-gray-600 hover:text-indigo-600"
              >
                Privacy
              </Link>
              <Link
                to="/contact"
                className="block text-gray-600 hover:text-indigo-600"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <FooterSubscribe />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          © 2024 BlogSpace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
