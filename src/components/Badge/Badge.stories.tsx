import type { Meta, StoryObj } from "@storybook/react-vite";

import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "success", "danger", "warning"],
    },

    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "Active",
  },
};

export const Success: Story = {
  args: {
    children: "Published",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    children: "Deleted",
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    children: "Pending",
    variant: "warning",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};
