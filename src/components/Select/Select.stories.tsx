import type { Meta, StoryObj } from "@storybook/react-vite";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable Select component used for displaying a list of options.",
      },
    },
  },

  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Select",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export const Required: Story = {
  args: {
    label: "Select",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: "Select",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    disabled: true,
  },
};

export const HelperText: Story = {
  args: {
    label: "Country",
    helperText: "Choose your preferred country",

    options: [
      {
        value: "india",
        label: "India",
      },
      {
        value: "saudi",
        label: "Saudi Arabia",
      },
    ],
  },
};

export const Error: Story = {
  args: {
    label: "Country",
    error: "Country is required",

    options: [
      {
        value: "india",
        label: "India",
      },
      {
        value: "saudi",
        label: "Saudi Arabia",
      },
    ],
  },
};

export const CompleteExample: Story = {
  args: {
    label: "Select",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    value: "option2",
    error: "This field is required.",
  },
};
