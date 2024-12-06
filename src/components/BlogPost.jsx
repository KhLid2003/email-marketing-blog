import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogPost({
  title,
  excerpt,
  author,
  date,
  readTime,
  imageUrl,
  category,
}) {
  const articleUrl = `/article/${encodeURIComponent(title)}`;

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <Link to={articleUrl}>
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </Link>
      <div className="p-6">
        <Link to={articleUrl}>
          <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-indigo-600 cursor-pointer transition-colors">
            {title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center gap-1">
            <User size={16} className="text-indigo-600" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} className="text-indigo-600" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-indigo-600" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
