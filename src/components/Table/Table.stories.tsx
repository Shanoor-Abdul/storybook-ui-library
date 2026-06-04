import type { Meta, StoryObj } from "@storybook/react-vite";

import Table from "./Table";

import Badge from "../Badge";

const meta: Meta<typeof Table> = {
  title: "Components/Table",

  component: Table,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable enterprise table component supporting search, sorting, pagination, row selection, custom cell rendering and loading states.",
      },
    },
  },

  argTypes: {
    loading: {
      control: "boolean",
    },

    searchable: {
      control: "boolean",
    },

    selectable: {
      control: "boolean",
    },

    striped: {
      control: "boolean",
    },

    stickyHeader: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

const columns = [
  {
    key: "name",
    title: "Name",
    sortable: true,
  },

  {
    key: "email",
    title: "Email",
    sortable: true,
  },

  {
    key: "role",
    title: "Role",
  },

  {
    key: "status",
    title: "Status",

    render: (value: unknown) => (
      <Badge variant={value === "Active" ? "success" : "danger"}>
        {String(value)}
      </Badge>
    ),
  },
];

const data = [
  {
    id: "1",
    name: "Shanoor Abdul",
    email: "shanoor@test.com",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@test.com",
    role: "Backend Developer",
    status: "Inactive",
  },
];

export const CustomStyling: Story = {
  args: {
    rowKey: "id",

    columns,

    data,

    searchable: true,

    selectable: true,

    tableClassName: "border-blue-300",

    headerClassName: "bg-blue-50",

    rowClassName: "hover:bg-blue-50",

    cellClassName: "text-gray-700",
  },
};

export const Empty: Story = {
  args: {
    rowKey: "id",

    columns,

    data: [],

    emptyMessage: "No users found",

    totalRecords: 0,
  },
};

export const Loading: Story = {
  args: {
    rowKey: "id",

    columns,

    data: [],

    loading: true,

    loadingText: "Fetching users...",
  },
};


export const WithoutSearch: Story = {
  args: {
    columns,

    data,

    searchable: false,

    totalRecords: 50,
  },
};

export const WithoutSelection: Story = {
  args: {
    columns,

    data,

    selectable: false,

    totalRecords: 50,
  },
};

export const Default: Story = {
  args: {
    rowKey: "id",

    columns,

    data,

    loading: false,

    searchable: true,

    selectable: true,

    striped: true,

    stickyHeader: true,

    currentPage: 1,

    totalRecords: 50,

    pageSize: 10,

    pageSizeOptions: [10, 20, 50],

    emptyMessage: "No records found",

    searchPlaceholder: "Search users...",

    loadingText: "Loading users...",
  },
};
