import React from "react";
import { Mail, X } from "lucide-react";
import boltAction from "path/to/boltAction";

export default function PopupNewsletter({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-indigo-100 p-2 rounded-full">
              <Mail className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Newsletter</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and stay updated with the latest email
            marketing trends and tips.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              boltAction({
                type: "file",
                filePath: "src/components/PopupNewsletter.jsx",
              });
            }}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
