import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RichTextEditor from "../../components/RichTextEditor";
import { addPost } from "../../utils/firebase";
import toast, { Toaster } from "react-hot-toast";

export default function CreatePost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
    readTime: "",
    imageUrl: "",
    imageWidth: "",
    imageHeight: "",
    category: "",
    content: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEditorChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      content,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Format the data
      const postData = {
        ...formData,
        readTime: `${formData.readTime} min read`,
        imageWidth: formData.imageWidth ? parseInt(formData.imageWidth) : null,
        imageHeight: formData.imageHeight
          ? parseInt(formData.imageHeight)
          : null,
        createdAt: new Date().toISOString(),
      };

      await addPost(postData);
      toast.success("Post created successfully");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Failed to create post");
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Read Time (minutes)
              </label>
              <input
                type="number"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
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

          <div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <div className="mt-1">
              <RichTextEditor
                value={formData.content}
                onChange={handleEditorChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              Set as featured post
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
