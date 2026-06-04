import type { PaginationProps } from "./Pagination.types";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
  className = "",
  showFirstLast = false,
}: PaginationProps) => {
  if (totalPages <= 0) {
    return null;
  }

  const getVisiblePages = () => {
    const pages: number[] = [];

    const start = Math.max(currentPage - 2, 1);

    const end = Math.min(currentPage + 2, totalPages);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getVisiblePages();

  return (
    <nav
      aria-label="Pagination"
      className={`flex items-center gap-2 ${className}`}
    >
      {showFirstLast && (
        <button
          disabled={currentPage === 1 || disabled}
          onClick={() => onPageChange?.(1)}
          className="
            px-3 py-2
            border
            rounded-md
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          First
        </button>
      )}

      <button
        disabled={currentPage === 1 || disabled}
        onClick={() => onPageChange?.(currentPage - 1)}
        className="
          px-3 py-2
          border
          rounded-md
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          disabled={disabled}
          onClick={() => onPageChange?.(page)}
          aria-current={currentPage === page ? "page" : undefined}
          className={`
            px-3 py-2
            border
            rounded-md

            ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : ""
            }

            disabled:opacity-50
            disabled:cursor-not-allowed
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
          disabled:cursor-not-allowed
        "
      >
        Next
      </button>

      {showFirstLast && (
        <button
          disabled={currentPage === totalPages || disabled}
          onClick={() => onPageChange?.(totalPages)}
          className="
            px-3 py-2
            border
            rounded-md
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          Last
        </button>
      )}
    </nav>
  );
};

export default Pagination;