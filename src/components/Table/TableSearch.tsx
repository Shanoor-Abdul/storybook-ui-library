interface TableSearchProps {
  onSearch?: (searchTerm: string) => void;
}

const TableSearch = ({ onSearch }: TableSearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onSearch?.(e.target.value)}
      className="
        w-full
        border
        rounded-md
        px-3
        py-2
      "
    />
  );
};

export default TableSearch;
