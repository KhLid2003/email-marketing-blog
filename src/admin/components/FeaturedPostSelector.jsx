import React from "react";
import { Star } from "lucide-react";
import { setFeaturedPost } from "../../utils/firebase";
import toast from "react-hot-toast";

export default function FeaturedPostSelector({ postId, isFeatured, onUpdate }) {
  const handleSetFeatured = async () => {
    try {
      await setFeaturedPost(postId);
      toast.success("Featured post updated successfully");
      if (onUpdate) onUpdate();
    } catch (error) {
      toast.error("Failed to update featured post");
    }
  };

  return (
    <button
      onClick={handleSetFeatured}
      className={`inline-flex items-center px-3 py-2 border ${
        isFeatured
          ? "border-yellow-300 bg-yellow-50 text-yellow-800"
          : "border-gray-300 bg-white text-gray-700"
      } rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      <Star className={`h-4 w-4 mr-2 ${isFeatured ? "fill-current" : ""}`} />
      {isFeatured ? "Featured" : "Set as Featured"}
    </button>
  );
}
