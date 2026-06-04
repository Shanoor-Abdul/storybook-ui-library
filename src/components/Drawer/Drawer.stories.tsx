import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import Drawer from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",

  component: Drawer,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable Drawer component used for side panels, filters and navigation menus.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const DrawerDemo = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Drawer</button>

      <Drawer {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <DrawerDemo {...args} />,

  args: {
    title: "User Details",

    children: "Drawer Content",
  },
};

export const Left: Story = {
  render: (args) => <DrawerDemo {...args} />,

  args: {
    placement: "left",

    title: "Left Drawer",

    children: "Content",
  },
};

export const Bottom: Story = {
  render: (args) => <DrawerDemo {...args} />,

  args: {
    placement: "bottom",

    title: "Bottom Drawer",

    children: "Content",
  },
};

export const Large: Story = {
  render: (args) => <DrawerDemo {...args} />,

  args: {
    size: "lg",

    title: "Large Drawer",

    children: "Content",
  },
};
