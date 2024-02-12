import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./index";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: "Marbella/Calendar",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-4">
      <Calendar mode="single" className="rounded-md border shadow" />
      <Calendar mode="single" className="rounded-md border shadow" />
    </div>
  );
};
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
