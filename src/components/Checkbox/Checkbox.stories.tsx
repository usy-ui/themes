import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Flex } from "../Layout/Flex";

import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex gap="20px" alignItems="center">
      <Checkbox label="Check me" />
      &nbsp; &nbsp; &nbsp;
      <Checkbox
        label="onClick"
        isChecked
        onChange={(checked) => alert(`is checked: ${checked}`)}
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Checkbox>;
