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
declare const TableHeader: ({ columns, selectable, allSelected, stickyHeader, onSelectAll, sortKey, sortDirection, onSort, }: TableHeaderProps) => import("react").JSX.Element;
export default TableHeader;
