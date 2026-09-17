export const MovieCard = ({ movie, onSelect }) => {
  const rating = movie.rating?.average
    ? `⭐ ${movie.rating.average}`
    : "⭐ N/A";

  // Fix 1: Corrected API property name 'premiered'
  const year = movie.premiered ? movie.premiered.split("-")[0] : "N/A";

  // Fix 2: Replaced broken placeholder domain with placehold.co
  const poster =
    movie.image?.medium ||
    "https://placehold.co/210x295/1e293b/06b6d4?text=No+Image";

  return (
    <div className="bg-slate-800 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col">
      <img
        src={poster}
        alt={movie.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/210x295/1e293b/06b6d4?text=No+Image";
        }}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col grow justify-between">
        <div>
          <h3 className="font-bold text-lg text-white truncate">
            {movie.name}
          </h3>
          <div className="flex justify-between items-center text-sm text-gray-300 mt-2">
            <span className="bg-slate-700 px-2 py-1 rounded text-xs">
              Rating: {rating}
            </span>
            <span className="text-xs">Year: {year}</span>
          </div>
        </div>
        <button
          onClick={() => onSelect(movie)}
          className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 rounded-lg text-sm transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
};
