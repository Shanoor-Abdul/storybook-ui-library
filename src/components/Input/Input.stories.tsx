import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable Input component used for collecting user input. Supports helper text, validation errors, disabled state, and multiple input types.",
      },
    },
  },

  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password"],
    },

    disabled: {
      control: "boolean",
    },

    required: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Required: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "Disabled input",
    disabled: true,
    value: "john@example.com",
  },
};

export const HelperText: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    helperText: "We'll never share your email with anyone.",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Email is required",
  },
};

export const WithValue: Story = {
  args: {
    label: "Full Name",
    value: "Shanoor Abdul",
  },
};

export const CompleteExample: Story = {
  args: {
    label: "Email Address",
    type: "email",
    value: "shanoor@example.com",
    placeholder: "Enter your email",
    helperText: "Use your company email address.",
    required: true,
  },
};