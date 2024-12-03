import React from 'react';

interface AdBannerProps {
  type: 'horizontal' | 'vertical';
}

export default function AdBanner({ type }: AdBannerProps) {
  return (
    <div className={`bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-md ${
      type === 'horizontal' ? 'h-32 mb-8' : 'h-[600px] sticky top-24'
    }`}>
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-sm">Advertisement</p>
          <p className="text-gray-400 text-xs mt-1">{type === 'horizontal' ? '728x90' : '300x600'}</p>
        </div>
      </div>
    </div>
  );
}