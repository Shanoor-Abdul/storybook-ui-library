import type { TableSearchProps } from "./Table.types";

const TableSearch: React.FC<TableSearchProps> = ({ onSearch, placeholder, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder || "Search..."}
      onChange={(e) => onSearch?.(e.target.value)}
      className={`w-full border rounded-md px-3 py-2 ${className ?? ""}`}
    />
  );
};

export default TableSearch;
