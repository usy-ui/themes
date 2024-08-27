import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";

import { Switch } from "./index";

const meta: Meta<typeof Switch> = {
  component: Switch,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => {
    return <Switch title="Agree with term" />;
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;
