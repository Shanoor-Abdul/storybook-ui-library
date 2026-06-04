import type { Meta, StoryObj } from "@storybook/react-vite";

import RadioGroup from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable RadioGroup component used for selecting a single option from a list.",
      },
    },
  },

  argTypes: {
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

type Story = StoryObj<typeof RadioGroup>;

const options = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
];

export const Default: Story = {
  args: {
    label: "Gender",
    options,
  },
};

export const Selected: Story = {
  args: {
    label: "Gender",
    options,
    value: "male",
  },
};

export const Disabled: Story = {
  args: {
    label: "Gender",
    options,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "Gender",
    options,
    error: "Please select a gender",
  },
};

export const SuccessVariant: Story = {
  args: {
    label: "Gender",
    options,
    value: "female",
    variant: "success",
  },
};

export const DangerVariant: Story = {
  args: {
    label: "Gender",
    options,
    value: "other",
    variant: "danger",
  },
};

export const Small: Story = {
  args: {
    label: "Gender",
    options,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Gender",
    options,
    size: "lg",
  },
};

export const CompleteExample: Story = {
  args: {
    label: "Gender",
    options,
    value: "male",
    variant: "primary",
    size: "md",
    required: true,
  },
};
