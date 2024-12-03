import React from 'react';
import { categories } from '../data/blog-data';
import { Newspaper } from 'lucide-react';

export default function Categories() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Browse by Category</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
              <Newspaper className="h-6 w-6 text-indigo-600" />
            </div>
            <p className="text-gray-600 mb-4">
              Explore {category.count} articles about {category.name.toLowerCase()}.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{category.count} Articles</span>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                View Articles →
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}