import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Flex } from "../Layout/Flex";

import { TextArea } from "./index";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex width="300px" direction="column" gap="30px">
      <TextArea title="About me" placeholder="How is your day?" />
      <TextArea
        title="About me"
        placeholder="How is your day?"
        description="This field is required"
        hasError
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof TextArea>;
