import React from "react";
import DOMPurify from "dompurify";

export default function ContentPreview({ content, onClose }) {
  if (!content) return null;

  // Sanitize HTML content
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full relative">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Content Preview</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>

          <div className="p-6 overflow-y-auto max-h-[70vh]">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
