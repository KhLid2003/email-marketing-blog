import React from 'react';

export default function ArticleContent({ content }) {
  const renderContent = (item, index) => {
    switch (item.type) {
      case 'text':
        return (
          <p key={index} className="mb-4 text-gray-600 leading-relaxed">
            {item.value}
          </p>
        );
      
      case 'heading':
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            {item.value}
          </h2>
        );
      
      case 'image':
        return (
          <figure key={index} className="my-8">
            <img
              src={item.url}
              alt={item.caption}
              width={item.width || "100%"}
              height={item.height || "auto"}
              className="rounded-lg shadow-lg"
              style={{
                width: item.width ? `${item.width}px` : '100%',
                height: item.height ? `${item.height}px` : 'auto',
                objectFit: 'cover'
              }}
            />
            {item.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );
      
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside mb-4 text-gray-600 space-y-2">
            {item.items.map((listItem, listIndex) => (
              <li key={listIndex}>{listItem}</li>
            ))}
          </ul>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="prose prose-lg prose-indigo max-w-none">
      {Array.isArray(content) ? content.map((item, index) => renderContent(item, index)) : (
        <p className="text-gray-600 leading-relaxed">{content}</p>
      )}
    </div>
  );
}