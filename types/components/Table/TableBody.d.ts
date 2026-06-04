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
declare const TableBody: ({ rowKey, columns, data, selectable, striped, selectedIds, onRowSelect, emptyMessage, }: TableBodyProps) => import("react").JSX.Element;
export default TableBody;
