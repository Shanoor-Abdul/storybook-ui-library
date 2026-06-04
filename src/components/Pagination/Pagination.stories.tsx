import type { Meta, StoryObj } from "@storybook/react-vite";

import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable Pagination component supporting page navigation, accessibility, large datasets and customizable styling.",
      },
    },
  },

  argTypes: {
    currentPage: {
      control: "number",
    },

    totalPages: {
      control: "number",
    },

    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    showFirstLast: true,
  },
};

export const Centered: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,

    className: "justify-center",
  },
};

export const LargeDataset: Story = {
  args: {
    currentPage: 25,
    totalPages: 100,
    showFirstLast: true,
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    disabled: true,
  },
};
