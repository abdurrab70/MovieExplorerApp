import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
import { MovieModal } from "../components/MovieModal";
import { Pagination } from "../components/Pagination";
import { Search } from "lucide-react";

export const MovieListing = () => {
  const { movies, loading, error, searchQuery, setSearchQuery } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Reset to Page 1 on New Search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Search Icon Click Handler
  const handleSearchClick = () => {
    setCurrentPage(1);
  };

  // Calculate Paginated Data
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const indexOfLastMovie = currentPage * itemsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Smooth Scroll on Page Change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="grow bg-slate-950 text-white px-6 py-8">
      <div className="container mx-auto">
        {/* Search Bar Container */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-slate-800 border border-slate-600 rounded-3xl py-3 pl-5 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 shadow-md transition"
            />
            <button
              type="button"
              onClick={handleSearchClick}
              aria-label="Search"
              className="absolute right-3 p-1.5 text-gray-400 hover:text-cyan-400 transition"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Loading / Error States */}
        {loading && (
          <div className="text-center py-20 text-gray-400 text-lg">
            Loading movies...
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-400 text-lg">
            Error: {error}
          </div>
        )}

        {/* Movie Grid */}
        {!loading && !error && (
          <>
            {movies.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                No movies found matching "{searchQuery}"
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {currentMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onSelect={(m) => setSelectedMovie(m)}
                    />
                  ))}
                </div>

                {/* Pagination Bar (Centered) */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </>
        )}

        {/* Details Modal */}
        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    </div>
  );
};
