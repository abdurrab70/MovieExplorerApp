import { useEffect } from "react";

export const MovieModal = ({ movie, onClose }) => {
  useEffect(() => {
    // modal open hole jodi escape click kora hole modal ti close hobe
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!movie) return null;
  //jodi poster image na pawa jai tahole No Image show hobe
  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/500x300?text=No+Image";
  const cleanSummary = movie.summary
    ? movie.summary.replace(/<[^>]*>?/gm, "")
    : "No description available.";

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 text-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative border border-slate-700 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* modal ar top right corner ar Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-slate-800 hover:bg-cyan-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg z-10 transition"
        >
          ✕
        </button>

        {/* Backdrop Image */}
        <div className="w-full h-64 bg-slate-800 relative">
          <img
            src={image}
            alt={movie.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Movie data dynamically show hobe ai khane */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-cyan-500">{movie.name}</h2>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
            <span>Rating: ⭐{movie.rating?.average || "N/A"}</span>

            <span className="text-gray-500">|</span>

            <span>
              Runtime: {movie.runtime ? `${movie.runtime} min` : "N/A"}
            </span>

            {movie.genres?.length > 0 && (
              <>
                <span className="text-gray-500">|</span>
                <span>Genres: {movie.genres.join(", ")}</span>
              </>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold border-b border-slate-700 pb-1 mb-2">
              Overview:
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {cleanSummary}
            </p>
          </div>

          <div className="flex justify-end pt-4">
            {/* Modal ar down ar close button */}
            <button
              onClick={onClose}
              className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded-lg text-sm transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
