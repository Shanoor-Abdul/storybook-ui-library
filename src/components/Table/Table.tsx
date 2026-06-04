import { useState } from "react";

import type { TableProps, TableColumn } from "./Table.types";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableSearch from "./TableSearch";
import TablePagination from "./TablePagination";

const Table = ({
  rowKey,
  columns,
  data,
  loading = false,
  searchable = true,
  selectable = false,
  striped = true,
  stickyHeader = false,

  currentPage = 1,
  totalRecords = 0,
  pageSize = 10,
  pageSizeOptions = [10, 20, 50],

  emptyMessage = "No records found",

  onSearch,
  onPageChange,
  onPageSizeChange,
  onSelectionChange,
}: TableProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [sortKey, setSortKey] = useState("");

  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: TableColumn) => {
    if (!column.sortable) return;

    if (sortKey === column.key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(column.key);
      setSortDirection("asc");
    }
  };

  const handleSelectAll = (checked: boolean) => {
    const ids = checked ? data.map((row) => String(row[rowKey])) : [];

    setSelectedIds(ids);

    onSelectionChange?.(checked ? data : []);
  };

  const handleRowSelect = (row: Record<string, unknown>, checked: boolean) => {
    const rowId = String(row[rowKey]);

    let updatedIds: string[];

    if (checked) {
      updatedIds = [...selectedIds, rowId];
    } else {
      updatedIds = selectedIds.filter((id) => id !== rowId);
    }

    setSelectedIds(updatedIds);

    onSelectionChange?.(
      data.filter((item) => updatedIds.includes(String(item[rowKey]))),
    );
  };

  const sortedData = [...data];

  if (sortKey) {
    sortedData.sort((a, b) => {
      const aValue = String(a[sortKey] ?? "");

      const bValue = String(b[sortKey] ?? "");

      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
  }

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="space-y-4">
      {searchable && <TableSearch onSearch={onSearch} />}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <TableHeader
            columns={columns}
            selectable={selectable}
            stickyHeader={stickyHeader}
            allSelected={selectedIds.length === data.length && data.length > 0}
            onSelectAll={handleSelectAll}
            sortKey={sortKey}
            sortDirection={sortDirection}
            onSort={handleSort}
          />

          <TableBody
            rowKey={rowKey}
            columns={columns}
            data={sortedData}
            selectable={selectable}
            striped={striped}
            selectedIds={selectedIds}
            onRowSelect={handleRowSelect}
            emptyMessage={emptyMessage}
          />
        </table>
      </div>

      <TablePagination
        currentPage={currentPage}
        totalRecords={totalRecords}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
};

export default Table;
