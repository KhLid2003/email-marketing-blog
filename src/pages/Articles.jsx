import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter } from "lucide-react";
import SEO from "../components/SEO";
import BlogPost from "../components/BlogPost";
import AdBanner from "../components/AdBanner";
import { categories } from "../data/blog-data";
import { db } from "../database/firebase";
import { getDocs, collection } from "firebase/firestore";

const blogCollection = collection(db, "blogPosts");

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      setIsFilterOpen(true);
    }
  }, [searchParams]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const filteredPosts =
    selectedCategory === "All"
      ? data
      : data.filter((post) => post.category === selectedCategory);

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
        title="Email Marketing Articles & Resources | EmailPro"
        description="Browse our collection of expert email marketing articles covering automation, deliverability, design, and strategy. Stay updated with the latest email marketing trends."
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">All Articles</h1>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-indigo-500 transition-colors"
          >
            <Filter size={20} />
            <span>Filter</span>
          </button>
        </div>

        {isFilterOpen && (
          <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
            <h3 className="font-semibold text-gray-800 mb-3">
              Filter by Category
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              <button
                onClick={() => handleCategorySelect("All")}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
                  selectedCategory === "All"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategorySelect(category.name)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
                    selectedCategory === category.name
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <AdBanner type="horizontal" />

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {data.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found in this category.</p>
            <button
              onClick={() => handleCategorySelect("All")}
              className="mt-4 text-indigo-600 hover:text-indigo-700"
            >
              View all articles
            </button>
          </div>
        )}

        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
              Load More Articles
            </button>
          </div>
        )}
      </main>
    </>
  );
}
