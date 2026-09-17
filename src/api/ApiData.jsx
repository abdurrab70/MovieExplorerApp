const baseUrl = "https://api.tvmaze.com";

// All movie show koranor jonne arrow function
export const fetchAllShows = async () => {
  try {
    const res = await fetch(`${baseUrl}/shows`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data shows:", error);
    throw error;
  }
};

// search bar handle korar jonne
export const searchShows = async (query) => {
  try {
    const res = await fetch(
      `${baseUrl}/search/shows?q=${encodeURIComponent(query)}`,
    );

    if (!res.ok) {
      throw new Error("Failed to search shows data");
    }

    const data = await res.json();
    // TVMaze search API ar data gula array object akare deya hoice tai oi data gula ke ber kore ana hoice
    return data.map((item) => item.show);
  } catch (error) {
    console.error("Error searching shows data:", error);
    throw error;
  }
};
