// src/components/DataTable/DataTable.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    data: [
      { id: 1, name: "John Doe", age: 28 },
      { id: 2, name: "Jane Smith", age: 34 },
    ],
    columns: [
      { key: "id", title: "ID", dataIndex: "id" },
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "age", title: "Age", dataIndex: "age" },
    ],
  },
};

export const NoData: Story = {
  args: {
    data: [],
    columns: [
      { key: "id", title: "ID", dataIndex: "id" },
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "age", title: "Age", dataIndex: "age" },
    ],
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: [
      { key: "id", title: "ID", dataIndex: "id" },
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "age", title: "Age", dataIndex: "age" },
    ],
    loading: true,
  },
};
