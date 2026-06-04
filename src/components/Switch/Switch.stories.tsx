import type { Meta, StoryObj } from "@storybook/react-vite";

import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Accessible toggle switch supporting multiple variants, sizes, validation states and custom styling.",
      },
    },
  },

  argTypes: {
    checked: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    variant: {
      control: "select",
      options: ["primary", "success", "danger"],
    },

    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Dark Mode",
  },
};

export const Checked: Story = {
  args: {
    label: "Dark Mode",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Dark Mode",
    disabled: true,
  },
};

export const Success: Story = {
  args: {
    label: "Published",
    checked: true,
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    label: "Delete Protection",
    checked: true,
    variant: "danger",
  },
};

export const Small: Story = {
  args: {
    label: "Small Switch",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Large Switch",
    size: "lg",
  },
};

export const Error: Story = {
  args: {
    label: "Accept Terms",
    error: "This field is required",
  },
};

export const CustomStyling: Story = {
  args: {
    label: "Custom Switch",

    checked: true,

    className: "p-4",

    labelClassName: "text-blue-600 font-bold",

    switchClassName: "shadow-lg",
  },
};
