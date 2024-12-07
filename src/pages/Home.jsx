import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import SEO from "../components/SEO";
import FeaturedPost from "../components/FeaturedPost";
import BlogPost from "../components/BlogPost";
import CategoryList from "../components/CategoryList";
import Newsletter from "../components/Newsletter";
import AdBanner from "../components/AdBanner";
import { categories } from "../data/blog-data";
import { db } from "../database/firebase";
import { getDocs, collection } from "firebase/firestore";
import { getFeaturedPost } from "../utils/firebase";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch regular posts
        const blogData = await getDocs(collection(db, "blogPosts"));
        const filteredPosts = blogData.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .filter((post) => !post.featured) // Exclude featured post from regular posts
          .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date

        setPosts(filteredPosts);

        // Fetch featured post
        const featured = await getFeaturedPost();
        setFeaturedPost(featured);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-xl mb-12"></div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-200 h-80 rounded-xl"></div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-200 h-96 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="EmailPro - Expert Email Marketing Tips & Strategies"
        description="Discover expert email marketing strategies, tips, and best practices to improve your campaigns. Get the latest insights on email automation, deliverability, and more."
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {featuredPost && <FeaturedPost {...featuredPost} />}
        <AdBanner type="horizontal" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Latest Articles
              </h2>
              <div className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 cursor-pointer">
                <span>View All</span>
                <ChevronRight size={20} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.slice(0, 4).map((post) => (
                <BlogPost key={post.id} {...post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <CategoryList categories={categories} />
            <Newsletter />
            <AdBanner type="vertical" />
          </div>
        </div>
      </main>
    </>
  );
}
