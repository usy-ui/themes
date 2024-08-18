import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../../.storybook/decorators";
import { Flex } from "../../Layout/Flex";

import { PanelTitle } from "./index";

const meta: Meta<typeof PanelTitle> = {
  component: PanelTitle,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex widthProps={{ width: "700px" }} direction="column">
      <PanelTitle title="Username" description="Choose a your own username" />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex widthProps={{ width: "700px" }} direction="column">
      <PanelTitle
        title="Username"
        description="Choose a your own username"
        size="large"
      />
      <PanelTitle
        title="Username"
        description="Choose a your own username"
        size="extra-large"
      />
      <PanelTitle
        title="Username"
        description="Choose a your own username"
        size="gigant-1"
      />
      <PanelTitle
        title="Username"
        description="Choose a your own username"
        size="gigant-2"
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof PanelTitle>;
