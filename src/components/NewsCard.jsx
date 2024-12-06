import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    author,
    title,
    thumbnail_url,
    details,
    total_view,
    rating,
    category_id,
    others_info,
  } = news;

  return (
    <div className="card w-full mb-6 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
      {/* Author Info */}
      <div className="p-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium text-gray-800">{author.name}</h4>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <FaShareAlt />
        </button>
      </div>
      <h2 className="text-lg font-bold my-2 text-gray-800 px-4">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full md:h-[300px] lg:h-[500px] object-cover"
      />

      {/* Card Content */}
      <div className="p-4">

        {/* Category & Trending */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-semibold bg-gray-200 text-gray-600 py-1 px-2 rounded">
            Category ID: {category_id}
          </span>
          {others_info.is_trending && (
            <span className="text-xs text-red-600 font-bold">Trending</span>
          )}
        </div>

        <p className="text-gray-600 text-sm mt-3">
          {details.slice(0, 100)}...{" "}
          <Link to={`/news/${news._id}`} className="text-blue-600 hover:underline">Read More</Link>
        </p>
      </div>

      {/* Footer */}
      <div className="p-4 flex justify-between items-center border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400">
          <FaStar />
          <span className="text-sm text-gray-800 font-medium">{rating.number}</span>
        </div>
        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span className="text-sm">{total_view} views</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
