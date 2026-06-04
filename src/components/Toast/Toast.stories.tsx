import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToastProvider } from "./ToastProvider";
import { useToast } from "./useToast";

import Button from "../Button";

const meta: Meta<typeof ToastProvider> = {
  title: "Components/Toast",
  component: ToastProvider,
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "Reusable Toast notification system supporting success, error, warning and info messages.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const Demo = () => {
  const toast = useToast();

  return (
    <div className="flex gap-2 flex-wrap">
      <Button
        label="Success"
        onClick={() => toast.success("User created successfully")}
      />

      <Button
        label="Error"
        variant="secondary"
        onClick={() => toast.error("Failed to create user")}
      />

      <Button
        label="Warning"
        onClick={() => toast.warning("Check required fields")}
      />

      <Button label="Info" onClick={() => toast.info("Profile updated")} />
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  ),
};

export const TopLeft: Story = {
  render: () => (
    <ToastProvider position="top-left">
      <Demo />
    </ToastProvider>
  ),
};

export const BottomRight: Story = {
  render: () => (
    <ToastProvider position="bottom-right">
      <Demo />
    </ToastProvider>
  ),
};
