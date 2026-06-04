import type { Meta, StoryObj } from "@storybook/react-vite";
import TextArea from "./TextArea";
const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable TextArea component used for collecting multi-line user input.",
      },
    },
  },

  argTypes: {
    disabled: {
      control: "boolean",
    },

    required: {
      control: "boolean",
    },

    rows: {
      control: "number",
    },

    showCharacterCount: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    label: "Text Area",
    placeholder: "Enter your text",
  },
};

export const Required: Story = {
  args: {
    label: "Text Area",
    placeholder: "Enter your text",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Text Area",
    placeholder: "Disabled input",
    disabled: true,
    value: "Disabled text",
  },
};

export const HelperText: Story = {
  args: {
    label: "Text Area",
    placeholder: "Enter your text",
    helperText: "Maximum 500 characters allowed.",
  },
};

export const Error: Story = {
  args: {
    label: "Text Area",
    placeholder: "Enter your text",
    error: "Text area is required",
  },
};

export const WithValue: Story = {
  args: {
    label: "Text Area",
    value: "Shanoor Abdul",
  },
};

export const LargeTextArea: Story = {
  args: {
    label: "Description",
    placeholder: "Enter detailed description",
    rows: 8,
  },
};

export const ValidationLimits: Story = {
  args: {
    label: "Feedback",
    placeholder: "Enter feedback",
    rows: 5,
    minLength: 10,
    maxLength: 200,
    showCharacterCount: true,
    helperText: "Minimum 10 characters, maximum 200 characters.",
  },
};

export const WithCharacterLimit: Story = {
  args: {
    label: "Description",
    placeholder: "Enter description",
    rows: 5,
    maxLength: 500,
    helperText: "Maximum 500 characters allowed",
  },
};

export const CompleteExample: Story = {
  args: {
    label: "Text Area",
    value: "Shanoor Abdul",
    placeholder: "Enter your text",
    rows: 5,
    helperText: "Maximum 500 characters allowed.",
    required: true,
  },
};
