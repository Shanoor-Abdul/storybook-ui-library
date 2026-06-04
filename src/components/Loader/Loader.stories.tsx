import type { Meta, StoryObj } from "@storybook/react-vite";

import Loader from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],

  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    variant: {
      control: "select",
      options: ["primary", "success", "danger"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Loading...",
  },
};
