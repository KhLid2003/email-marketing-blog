import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { getPost, updatePost } from '../../utils/firebase';
import toast, { Toaster } from 'react-hot-toast';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPost(id);
        setPost(fetchedPost);
      } catch (error) {
        toast.error('Failed to fetch post');
        navigate('/admin/dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  const handleSubmit = async (formData) => {
    try {
      await updatePost(id, formData);
      toast.success('Post updated successfully');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Failed to update post');
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Edit Post</h1>
      <PostForm initialData={post} onSubmit={handleSubmit} buttonText="Update Post" />
    </div>
  );
}