import type { PaginationProps } from "./Pagination.types";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={currentPage === 1 || disabled}
        onClick={() => onPageChange?.(currentPage - 1)}
        className="
          px-3 py-2
          border
          rounded-md
          disabled:opacity-50
        "
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          disabled={disabled}
          onClick={() => onPageChange?.(page)}
          className={`
            px-3 py-2
            border
            rounded-md

            ${currentPage === page ? "bg-blue-600 text-white" : ""}

            disabled:opacity-50
          `}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages || disabled}
        onClick={() => onPageChange?.(currentPage + 1)}
        className="
          px-3 py-2
          border
          rounded-md
          disabled:opacity-50
        "
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
