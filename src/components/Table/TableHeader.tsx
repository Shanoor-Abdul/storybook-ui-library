import type { TableColumn } from "./Table.types";

interface TableHeaderProps {
  columns: TableColumn[];

  selectable?: boolean;

  allSelected?: boolean;

  stickyHeader?: boolean;

  onSelectAll?: (checked: boolean) => void;

  sortKey?: string;

  sortDirection?: "asc" | "desc";

  onSort?: (column: TableColumn) => void;
}

const TableHeader = ({
  columns,
  selectable = false,
  allSelected = false,
  stickyHeader = false,
  onSelectAll,
  sortKey,
  sortDirection,
  onSort,
}: TableHeaderProps) => {
  return (
    <thead>
      <tr className="bg-gray-100">
        {selectable && (
          <th scope="col" className="border px-4 py-2">
            <input
              type="checkbox"
              aria-label="Select all rows"
              checked={allSelected}
              onChange={(e) => onSelectAll?.(e.target.checked)}
            />
          </th>
        )}

        {columns.map((column) => (
          <th
            key={column.key}
            onClick={() => onSort?.(column)}
            className={`border px-4 py-2 ${stickyHeader ? "sticky top-0 bg-gray-100 z-10" : ""}
            ${ column.align === "center"
                ? "text-center"
                : column.align === "right"
                  ? "text-right"
                  : "text-left"}
            ${column.sortable ? "cursor-pointer" : ""}`}
          >
            {column.title}

            {sortKey === column.key && (
              <span className="ml-2">
                {sortDirection === "asc" ? "▲" : "▼"}
              </span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
