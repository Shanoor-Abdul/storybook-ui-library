import type { ReactNode } from "react";

export interface TableColumn {
  key: string;

  title: string;

  sortable?: boolean;

  align?: "left" | "center" | "right";

  render?: (value: unknown, row: Record<string, unknown>) => ReactNode;
}

export interface TableProps {
  rowKey: string;

  columns: TableColumn[];

  data: Record<string, unknown>[];

  loading?: boolean;

  searchable?: boolean;

  selectable?: boolean;

  striped?: boolean;

  stickyHeader?: boolean;

  currentPage?: number;

  totalRecords?: number;

  pageSize?: number;

  pageSizeOptions?: number[];

  emptyMessage?: string;

  onSearch?: (searchTerm: string) => void;

  onPageChange?: (page: number) => void;

  onPageSizeChange?: (pageSize: number) => void;

  onSelectionChange?: (selectedRows: Record<string, unknown>[]) => void;
}
