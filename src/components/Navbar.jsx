import { Link, NavLink } from "react-router-dom";
import { Tv } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-40 px-4 sm:px-8 md:px-16 lg:px-24 py-3 sm:py-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
        {/* Brand Logo - Responsive Font Size */}
        <Link
          to="/home"
          className="text-lg sm:text-2xl font-bold tracking-wide flex items-center gap-1.5 shrink-0 hover:opacity-90 transition"
        >
          <Tv className="text-cyan-500" />{" "}
          <span className="text-cyan-500">Extreame</span>
          <span className="hidden xs:inline sm:inline">Movie</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-8 font-medium text-sm sm:text-base shrink-0">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Movies List
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
