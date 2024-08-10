import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";
import { Flex } from "../../Layout/Flex";

import { Password } from "./index";

const meta: Meta<typeof Password> = {
  component: Password,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex direction="column" gap="30px">
      <Password title="Password" placeholder="Enter your password" />
      <Password
        title="Password"
        placeholder="Enter your password"
        description="This field is required"
        hasError
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Password>;
