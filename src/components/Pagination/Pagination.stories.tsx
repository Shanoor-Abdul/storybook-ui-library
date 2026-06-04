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
          "Reusable Pagination component used for navigating between pages of content.",
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
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    disabled: true,
  },
};
