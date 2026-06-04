import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Modal from "./Modal";
import type { ModalProps } from "./Modal.types";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",

  component: Modal,

  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable Modal component used for dialogs, confirmations and forms.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalDemo = (args: ModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalDemo {...args} />,

  args: {
    title: "Modal Title",

    children: "Modal Content",
  },
};

export const WithFooter: Story = {
  render: (args) => <ModalDemo {...args} />,

  args: {
    title: "Delete User",

    children: "Are you sure you want to delete this user?",

    footer: (
      <div className="flex gap-2">
        <button>Cancel</button>

        <button>Delete</button>
      </div>
    ),
  },
};

export const Large: Story = {
  render: (args) => <ModalDemo {...args} />,

  args: {
    size: "lg",

    title: "Large Modal",

    children: "Large content area",
  },
};

export const Small: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    size: "sm",
    title: "Small Modal",
    children: "Small modal content",
  },
};

export const ExtraLarge: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    size: "xl",
    title: "Extra Large Modal",
    children: "Extra large modal content",
  },
};

export const NoOverlayClose: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Protected Modal",
    children: "Clicking outside will not close this modal.",
    closeOnOverlayClick: false,
  },
};

export const NoEscClose: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "ESC Disabled",
    children: "Escape key will not close this modal.",
    closeOnEsc: false,
  },
};
