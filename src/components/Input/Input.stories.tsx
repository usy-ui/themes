import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { EnvelopeIcon, InfoCircleIcon } from "../Icon";
import { Flex } from "../Layout/Flex";

import { Input } from "./index";

const meta: Meta<typeof Input> = {
  component: Input,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex direction="column" gap="30px">
      <Input
        title="Email"
        placeholder="Enter your email"
        iconLeft={<EnvelopeIcon width="18px" height="18px" />}
        hasAsterisk
      />
      <Input
        placeholder="Enter your email"
        iconRight={<InfoCircleIcon width="18px" height="18px" />}
      />
      <Input
        placeholder="Enter your email"
        description="This field cannot be empty"
        hasError
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Input>;
