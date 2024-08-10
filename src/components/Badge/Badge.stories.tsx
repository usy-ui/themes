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

export const Types: Story = {
  render: () => (
    <Flex gap="20px">
      <Badge type="filled">filled</Badge>
      <Badge type="outline">filled</Badge>
      <Badge type="normal">filled</Badge>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="20px">
      <Badge size="small">small</Badge>
      <Badge size="medium">medium</Badge>
      <Badge size="large">large</Badge>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex gap="20px">
      <Badge color="primary-light">primary light</Badge>
      <Badge color="primary">primary</Badge>
      <Badge color="primary-dark">primary dark</Badge>
      <Badge color="random">random</Badge>
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Badge>;
