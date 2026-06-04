import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component: "Reusable Checkbox component used for selecting options.",
      },
    },
  },

  argTypes: {
    disabled: {
      control: "boolean",
    },

    checked: {
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

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Checkbox",
  },
};

export const Checked: Story = {
  args: {
    label: "Accept Terms",
    checked: true,
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
    label: "Delete Confirmation",
    checked: true,
    variant: "danger",
  },
};

export const Small: Story = {
  args: {
    label: "Small Checkbox",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Large Checkbox",
    size: "lg",
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Subscribed",
    checked: true,
    disabled: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Checkbox",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "Checkbox",
    error: "Checkbox is required",
  },
};

export const CompleteExample: Story = {
  args: {
    label: "Checkbox",
    checked: true,
    required: true,
  },
};
