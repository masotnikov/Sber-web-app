import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" }, // Для отслеживания кликов в Storybook
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Button
export const Default: Story = {
  args: {
    children: "Default Button",
  },
};

// Primary Button (используем className для стилизации)
export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "primaryButton", // Пример использования className
  },
};

// Disabled Button
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

// Button with Custom Text
export const CustomText: Story = {
  args: {
    children: "Click Me!",
  },
};
