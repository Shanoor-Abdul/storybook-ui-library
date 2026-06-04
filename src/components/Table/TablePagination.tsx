interface TablePaginationProps {
  currentPage: number;

  totalRecords: number;

  pageSize: number;

  pageSizeOptions: number[];

  onPageChange?: (page: number) => void;

  onPageSizeChange?: (pageSize: number) => void;
}

const TablePagination = ({
  currentPage,
  totalRecords,
  pageSize,
  pageSizeOptions,
  onPageChange,
  onPageSizeChange,
}: TablePaginationProps) => {
  const totalPages = Math.ceil(totalRecords / pageSize);

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>

        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
          className="
            border
            rounded-md
            px-2
            py-1
          "
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-3">
        <span>
          Showing {Math.min((currentPage - 1) * pageSize + 1, totalRecords)}-
          {Math.min(currentPage * pageSize, totalRecords)} of {totalRecords}
        </span>

        <button
          disabled={currentPage === 1}
          className="
                px-3 py-1
                border
                rounded
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
          onClick={() => onPageChange?.(currentPage - 1)}
        >
          Prev
        </button>

        <span>
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          className="
            px-3 py-1
            border
            rounded
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
          onClick={() => onPageChange?.(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
