import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

export default function PostForm({
  initialData,
  onSubmit,
  buttonText = "Create Post",
}) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    author: initialData?.author || "",
    date: initialData?.date || new Date().toISOString().split("T")[0],
    readTime: initialData?.readTime || "",
    imageUrl: initialData?.imageUrl || "",
    imageWidth: initialData?.imageWidth || "",
    imageHeight: initialData?.imageHeight || "",
    category: initialData?.category || "",
    content: Array.isArray(initialData?.content) ? initialData.content : [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addContentBlock = (type) => {
    const newBlock = {
      type,
      ...(type === "text" && { value: "" }),
      ...(type === "heading" && { value: "" }),
      ...(type === "image" && { url: "", caption: "", width: "", height: "" }),
      ...(type === "list" && { items: [""] }),
    };

    setFormData((prev) => ({
      ...prev,
      content: [...prev.content, newBlock],
    }));
  };

  const updateContentBlock = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content.map((block, i) =>
        i === index ? { ...block, [field]: value } : block
      ),
    }));
  };

  const updateListItem = (blockIndex, itemIndex, value) => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content.map((block, i) =>
        i === blockIndex
          ? {
              ...block,
              items: block.items.map((item, j) =>
                j === itemIndex ? value : item
              ),
            }
          : block
      ),
    }));
  };

  const addListItem = (blockIndex) => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content.map((block, i) =>
        i === blockIndex ? { ...block, items: [...block.items, ""] } : block
      ),
    }));
  };

  const removeListItem = (blockIndex, itemIndex) => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content.map((block, i) =>
        i === blockIndex
          ? {
              ...block,
              items: block.items.filter((_, j) => j !== itemIndex),
            }
          : block
      ),
    }));
  };

  const removeContentBlock = (index) => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Excerpt
        </label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Read Time
          </label>
          <input
            type="text"
            name="readTime"
            value={formData.readTime}
            onChange={handleChange}
            placeholder="e.g., 5 min read"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select a category</option>
            <option value="Trends">Trends</option>
            <option value="Deliverability">Deliverability</option>
            <option value="Design">Design</option>
            <option value="Automation">Automation</option>
            <option value="Analytics">Analytics</option>
            <option value="Personalization">Personalization</option>
            <option value="Compliance">Compliance</option>
            <option value="Strategy">Strategy</option>
            <option value="Testing">Testing</option>
            <option value="Best Practices">Best Practices</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Featured Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image Width
          </label>
          <input
            type="number"
            name="imageWidth"
            value={formData.imageWidth}
            onChange={handleChange}
            placeholder="Width in pixels"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image Height
          </label>
          <input
            type="number"
            name="imageHeight"
            value={formData.imageHeight}
            onChange={handleChange}
            placeholder="Height in pixels"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Content Blocks</h3>
          <div className="space-x-2">
            <button
              type="button"
              onClick={() => addContentBlock("text")}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Text
            </button>
            <button
              type="button"
              onClick={() => addContentBlock("heading")}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Heading
            </button>
            <button
              type="button"
              onClick={() => addContentBlock("image")}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Image
            </button>
            <button
              type="button"
              onClick={() => addContentBlock("list")}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add List
            </button>
          </div>
        </div>

        {formData.content.map((block, index) => (
          <div key={index} className="relative border rounded-md p-4">
            <button
              type="button"
              onClick={() => removeContentBlock(index)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <MinusCircle size={20} />
            </button>

            {block.type === "text" && (
              <textarea
                value={block.value}
                onChange={(e) =>
                  updateContentBlock(index, "value", e.target.value)
                }
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter text content..."
              />
            )}

            {block.type === "heading" && (
              <input
                type="text"
                value={block.value}
                onChange={(e) =>
                  updateContentBlock(index, "value", e.target.value)
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter heading..."
              />
            )}

            {block.type === "image" && (
              <div className="space-y-2">
                <input
                  type="url"
                  value={block.url}
                  onChange={(e) =>
                    updateContentBlock(index, "url", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter image URL..."
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    value={block.width || ""}
                    onChange={(e) =>
                      updateContentBlock(index, "width", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Width in pixels..."
                  />
                  <input
                    type="number"
                    value={block.height || ""}
                    onChange={(e) =>
                      updateContentBlock(index, "height", e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Height in pixels..."
                  />
                </div>
                <input
                  type="text"
                  value={block.caption}
                  onChange={(e) =>
                    updateContentBlock(index, "caption", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter image caption..."
                />
              </div>
            )}

            {block.type === "list" && (
              <div className="space-y-2">
                {block.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) =>
                        updateListItem(index, itemIndex, e.target.value)
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Enter list item..."
                    />
                    <button
                      type="button"
                      onClick={() => removeListItem(index, itemIndex)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <MinusCircle size={20} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addListItem(index)}
                  className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-900"
                >
                  <PlusCircle size={20} className="mr-1" />
                  Add Item
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}
