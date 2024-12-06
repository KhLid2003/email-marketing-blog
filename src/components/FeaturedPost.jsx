import React from "react";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedPost({
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
    <article className="relative bg-white rounded-xl overflow-hidden shadow-xl mb-12 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <Link to={articleUrl} className="md:w-1/2 relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            {category}
          </span>
        </Link>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <span className="text-indigo-600 font-semibold mb-2 tracking-wide uppercase text-sm">
            Featured Post
          </span>
          <Link to={articleUrl}>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 hover:text-indigo-600 cursor-pointer transition-colors">
              {title}
            </h1>
          </Link>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {excerpt}
          </p>
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-6">
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
          <Link
            to={articleUrl}
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all group"
          >
            Read Full Article
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}