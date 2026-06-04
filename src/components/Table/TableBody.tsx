import type { TableColumn } from "./Table.types";

interface TableBodyProps {
  rowKey: string;

  columns: TableColumn[];

  data: Record<string, unknown>[];

  selectable?: boolean;

  striped?: boolean;

  selectedIds?: string[];

  onRowSelect?: (row: Record<string, unknown>, checked: boolean) => void;

  emptyMessage?: string;
}

const TableBody = ({
  rowKey,
  columns,
  data,
  selectable = false,
  striped = true,
  selectedIds = [],
  onRowSelect,
  emptyMessage = "No records found",
}: TableBodyProps) => {
  if (!data.length) {
    return (
      <tbody>
        <tr>
          <td
            colSpan={columns.length + (selectable ? 1 : 0)}
            className="
              py-6
              text-center
              text-gray-500
            "
          >
            {emptyMessage}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map((row, rowIndex) => {
        const isSelected = selectedIds.includes(String(row[rowKey]));

        return (
          <tr
            key={rowIndex}
            className={`
              ${striped && rowIndex % 2 === 0 ? "bg-gray-50" : ""}

              hover:bg-gray-100
            `}
          >
            {selectable && (
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={(e) => onRowSelect?.(row, e.target.checked)}
                />
              </td>
            )}

            {columns.map((column) => (
              <td
                key={column.key}
                className={`
                  border
                  px-4
                  py-2

                  ${
                    column.align === "center"
                      ? "text-center"
                      : column.align === "right"
                        ? "text-right"
                        : "text-left"
                  }
                `}
              >
                {column.render
                  ? column.render(row[column.key], row)
                  : String(row[column.key] ?? "")}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
