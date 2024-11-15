import { AiOutlineEye, AiFillStar, AiOutlineShareAlt } from "react-icons/ai";

const Newscardd = (props = {}) => {
  const { news } = props || {};

  return (
    <div className="card w-full bg-base-100 shadow-lg rounded-lg p-4">
      {/* Author Section */}
      <div className="flex items-center mb-4">
        <img
          src={news?.author?.img || "/default-author-image.jpg"} // Provide a default image if img is missing
          alt={news?.author?.name || "Author"}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="font-semibold text-gray-800">
            {news?.author?.name || "Unknown Author"}
          </h2>
          <p className="text-sm text-gray-500">
            {news?.author?.published_date
              ? news.author.published_date.split(" ")[0]
              : "Unknown Date"}
          </p>
        </div>
        <div className="ml-auto">
          <AiOutlineShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2">{news?.title || "Untitled"}</h3>

      {/* Thumbnail Image */}
      <div className="w-full mb-4">
        <img
          src={news?.thumbnail_url || "/default-thumbnail.jpg"} // Provide a default image if thumbnail_url is missing
          alt="Thumbnail"
          className="w-full h-60 object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {news?.details || "No details available."}
      </p>
      <a href="#" className="text-red-500 font-semibold mb-4">
        Read More
      </a>

      {/* Rating and Views */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`text-yellow-400 ${
                  i < Math.round(news?.rating?.number || 0)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600 font-medium">
            {news?.rating?.number || 0}
          </span>
        </div>
        <div className="flex items-center">
          <AiOutlineEye className="text-gray-500 mr-1" />
          <span className="text-gray-600 font-medium">
            {news?.total_view || 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Newscardd;
