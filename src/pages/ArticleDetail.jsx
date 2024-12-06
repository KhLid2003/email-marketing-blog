import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import SEO from "../components/SEO";
import AdBanner from "../components/AdBanner";
import ArticleContent from "../components/ArticleContent";
import { db } from "../database/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function ArticleDetail() {
  const { title } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const decodedTitle = decodeURIComponent(title).replace(/-/g, " ");
        const articlesRef = collection(db, "blogPosts");
        const q = query(articlesRef, where("title", "==", decodedTitle));

        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const articleData = {
            id: querySnapshot.docs[0].id,
            ...querySnapshot.docs[0].data(),
          };
          setArticle(articleData);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
    window.scrollTo(0, 0);
  }, [title]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-800">Loading...</h1>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-800">Article not found</h1>
        <button
          onClick={() => navigate("/articles")}
          className="mt-4 text-indigo-600 hover:text-indigo-700"
        >
          Back to Articles
        </button>
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

          {Array.isArray(article.content) ? (
            <ArticleContent content={article.content} />
          ) : (
            <div className="prose prose-lg prose-indigo max-w-none">
              <p className="text-gray-600 leading-relaxed">{article.content}</p>
            </div>
          )}

          <AdBanner type="horizontal" />
        </article>
      </main>
    </>
  );
}
