import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import SEO from "../components/SEO";
import { blogPosts, featuredPost } from "../data/blog-data";
import AdBanner from "../components/AdBanner";

export default function ArticleDetail() {
  const { title } = useParams();
  const navigate = useNavigate();

  const article = [...blogPosts, featuredPost].find(
    (post) =>
      encodeURIComponent(post.title.toLowerCase().replace(/\s+/g, "-")) ===
      title
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-800">Article not found</h1>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${article.title} | EmailPro`}
        description={article.excerpt}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <article>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-gray-500">
              <User size={16} className="text-indigo-600" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Calendar size={16} className="text-indigo-600" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Clock size={16} className="text-indigo-600" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {article.title}
          </h1>

          <AdBanner type="horizontal" />

          <div className="prose prose-lg prose-indigo max-w-none mt-8">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <AdBanner type="horizontal" />
        </article>
      </main>
    </>
  );
}
