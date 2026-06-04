interface TablePaginationProps {
    currentPage: number;
    totalRecords: number;
    pageSize: number;
    pageSizeOptions: number[];
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
}
declare const TablePagination: ({ currentPage, totalRecords, pageSize, pageSizeOptions, onPageChange, onPageSizeChange, }: TablePaginationProps) => import("react").JSX.Element;
export default TablePagination;
