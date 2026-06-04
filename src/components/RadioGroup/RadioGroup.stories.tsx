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
          "Reusable RadioGroup component supporting validation, accessibility, disabled options and custom styling.",
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

export const Required: Story = {
  args: {
    label: "Gender",
    options,
    required: true,
  },
};

export const Selected: Story = {
  args: {
    label: "Gender",
    options,
    value: "male",
  },
};

export const DisabledOption: Story = {
  args: {
    label: "Gender",

    options: [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
        disabled: true,
      },
      {
        label: "Other",
        value: "other",
      },
    ],
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

export const CustomStyling: Story = {
  args: {
    label: "Gender",

    options,

    className: "p-4",

    labelClassName: "text-blue-600",

    optionClassName: "text-gray-700",
  },
};
