export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
    disabled?: boolean;
    className?: string;
    showFirstLast?: boolean;
}
