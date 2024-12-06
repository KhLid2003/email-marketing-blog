import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategoryList({ categories }) {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/articles?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <button 
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-700">{category.name}</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}