// src/App.tsx
import { useState } from "react";
import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";
import type { Column } from "./components/DataTable/DataTable";

type Person = {
  id: number;
  name: string;
  email: string;
};

const sampleData: Person[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

const personColumns: Column<Person>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
];

export default function App() {
  const [value, setValue] = useState("");
  const [selectedRows, setSelectedRows] = useState<Person[]>([]);

  console.log(selectedRows); // temporarily use selectedRows to avoid TS warning

  return (
    <div className="max-w-2xl mx-auto p-4">
      <InputField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Username"
        placeholder="Enter your username"
        helperText="No special characters"
        variant="outlined"
        size="md"
      />
      <DataTable
        data={sampleData}
        columns={personColumns}
        selectable={true}
        loading={false}
        onRowSelect={setSelectedRows}
      />
    </div>
  );
}
