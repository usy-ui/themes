import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Flex } from "../Layout/Flex";

import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  component: Badge,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Variants: Story = {
  render: () => (
    <Flex gap="20px" alignItems="center">
      <Badge variant="filled">filled</Badge>
      <Badge variant="outline">outline</Badge>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="20px" alignItems="center">
      <Badge size="small">small</Badge>
      <Badge size="medium">medium</Badge>
      <Badge size="large">large</Badge>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex gap="20px" alignItems="center">
      <Badge color="primary">primary</Badge>
      <Badge color="primary-light">primary light</Badge>
      <Badge color="primary-dark">primary dark</Badge>
      <Badge color="random">random</Badge>
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Badge>;
