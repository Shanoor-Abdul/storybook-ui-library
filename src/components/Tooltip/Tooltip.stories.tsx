import type { Meta, StoryObj } from "@storybook/react-vite";

import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Reusable Tooltip component used for displaying contextual information on hover.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: () => (
    <Tooltip content="Tooltip on top" position="top">
      <button>Hover Me</button>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Tooltip content="Tooltip on bottom" position="bottom">
      <button>Hover Me</button>
    </Tooltip>
  ),
};

export const Left: Story = {
  render: () => (
    <Tooltip content="Tooltip on left" position="left">
      <button>Hover Me</button>
    </Tooltip>
  ),
};

export const Right: Story = {
  render: () => (
    <Tooltip content="Tooltip on right" position="right">
      <button>Hover Me</button>
    </Tooltip>
  ),
};
