import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { addPost } from '../../utils/firebase';
import toast, { Toaster } from 'react-hot-toast';

export default function CreatePost() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await addPost(formData);
      toast.success('Post created successfully');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Failed to create post');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}