import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "User Profile",
    description: "This is a simple card component.",
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "User Profile",
    subtitle: "Frontend Developer",
    description: "This card contains a subtitle.",
  },
};

export const WithFooter: Story = {
  args: {
    title: "Project Details",

    description: "Project description goes here.",

    footer: <button>View More</button>,
  },
};

export const Outlined: Story = {
  args: {
    title: "Outlined Card",
    variant: "outlined",

    description: "This card uses outlined styling.",
  },
};

export const LargeShadow: Story = {
  args: {
    title: "Shadow Card",
    shadow: "lg",

    description: "This card has a large shadow.",
  },
};
