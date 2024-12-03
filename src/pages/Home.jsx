import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import SEO from "../components/SEO";
import FeaturedPost from "../components/FeaturedPost";
import BlogPost from "../components/BlogPost";
import CategoryList from "../components/CategoryList";
import Newsletter from "../components/Newsletter";
import AdBanner from "../components/AdBanner";
import { featuredPost, categories } from "../data/blog-data";
import { db } from "../database/firebase";
import { getDocs, collection } from "firebase/firestore";

const blogCollection = collection(db, "blogPosts");

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const blogData = await getDocs(blogCollection);
        const filterdData = blogData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filterdData);
        setData(filterdData);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <SEO
        title="EmailPro - Expert Email Marketing Tips & Strategies"
        description="Discover expert email marketing strategies, tips, and best practices to improve your campaigns. Get the latest insights on email automation, deliverability, and more."
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeaturedPost {...featuredPost} />
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
              {data.map((post, index) => (
                <BlogPost key={index} {...post} />
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
