import { Link } from "react-router-dom";
import { Navigation } from "lucide-react";

export const Home = () => {
  return (
    <div className="grow relative flex flex-col items-center justify-start pt-16 md:pt-24 px-6 overflow-hidden">
      {/* 1. Full Width Background Poster Image */}
      <img
        src="https://4kwallpapers.com/images/walls/thumbs_3t/26610.jpg"
        alt="Movie Background Banner"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* 2. Dark Overlay Layer for Readability */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-slate-950/60 z-10"></div>

      {/* 3. Hero Content */}
      <div className="relative z-20 max-w-3xl text-center space-y-5">
        <span className="inline-block bg-cyan-600/20 text-cyan-400 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest border border-cyan-500/30 backdrop-blur-md">
          Unlimited Movies & Shows
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
          DISCOVER <span className="text-cyan-400">YOUR FAVORITE</span> MOVIES
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto drop-shadow">
          Explore and discover your favorite movies from around the world with
          real-time API data.
        </p>

        <div className="pt-2">
          <Link
            to="/movies"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-base md:text-lg px-8 py-3.5 rounded-xl shadow-xl hover:shadow-cyan-600/40 transition transform hover:-translate-y-1 active:translate-y-0"
          >
            <span>Explore Now</span>
            <Navigation className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
