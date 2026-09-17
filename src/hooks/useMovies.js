import { useState, useEffect } from "react";
import { fetchAllShows, searchShows } from "../api/ApiData.jsx";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        setLoading(true); // data fetch korar thik age loading chalu hobe
        let data;

        if (searchQuery.trim() === "") {
          data = await fetchAllShows();
        } else {
          data = await searchShows(searchQuery);
        }

        if (isMounted) {
          setMovies(data);
          if (data.length === 0) {
            setError("No movies found matching your search.");
          } else {
            setError(null); // Data Pawa gele error reset hobe
          }
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    // 800ms pore data search request execute hobe
    const timer = setTimeout(() => {
      getData();
    }, 800);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return {
    movies,
    loading,
    error,
    searchQuery,
    setSearchQuery, // state update gula return kore dilam
  };
};
