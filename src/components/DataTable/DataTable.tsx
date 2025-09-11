import { useState } from "react";

export type Column<T> = {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
};

export type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
};

export function DataTable<T extends { [key: string]: any }>({
  data = [],
  columns = [],
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  // Toggle row selection
  const toggleRow = (row: T) => {
    let newSelected: T[];
    if (selectedRows.includes(row)) {
      newSelected = selectedRows.filter((r) => r !== row);
    } else {
      newSelected = selectable ? [...selectedRows, row] : [row];
    }
    setSelectedRows(newSelected);
    onRowSelect?.(newSelected);
  };

  // Sorting logic
  const sortedData = (() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key!];
      const bVal = b[sortConfig.key!];

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  })();

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    setSortConfig((prev) => {
      if (prev.key === col.dataIndex) {
        // Toggle asc/desc
        return {
          key: col.dataIndex,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key: col.dataIndex, direction: "asc" };
    });
  };

  if (loading) return <div>Loading...</div>;
  if (!data.length) return <div>No data</div>;

  return (
    <div className="overflow-x-auto">
      <table
        className="min-w-full border border-gray-300"
        aria-label="Data table"
      >
        <thead>
          <tr>
            {selectable && <th scope="col"></th>}
            {columns.map((col) => (
              <th
                key={col.key}
                className={`border px-2 py-1 text-left cursor-${
                  col.sortable ? "pointer" : "default"
                }`}
                onClick={() => handleSort(col)}
                scope="col"
                aria-sort={
                  sortConfig.key === col.dataIndex
                    ? sortConfig.direction === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
              >
                {col.title}
                {col.sortable &&
                  sortConfig.key === col.dataIndex &&
                  (sortConfig.direction === "asc" ? " ▲" : " ▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr
              key={idx}
              className={`border ${
                selectedRows.includes(row) ? "bg-blue-100" : ""
              }`}
            >
              {selectable && (
                <td className="border px-2 py-1">
                  <input
                    type="checkbox"
                    aria-label={`Select row ${idx + 1}`}
                    checked={selectedRows.includes(row)}
                    onChange={() => toggleRow(row)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="border px-2 py-1">
                  {row[col.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
