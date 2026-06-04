import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",

  component: Button,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component: "Reusable button component used throughout the application.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Save",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Cancel",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};
