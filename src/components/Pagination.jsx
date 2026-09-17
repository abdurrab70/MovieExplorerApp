export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-12 mb-6 flex-wrap">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-slate-800 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-600 transition"
      >
        Prev
      </button>

      {/* Kon page a ace seta dekhano (Current Page)*/}
      <span className="text-gray-300 font-medium px-4 text-sm sm:text-base">
        Page <span className="text-cyan-400 font-bold">{currentPage}</span> of{" "}
        <span className="text-white font-bold">{totalPages}</span>
      </span>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-slate-800 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-600 transition"
      >
        Next
      </button>
    </div>
  );
};
