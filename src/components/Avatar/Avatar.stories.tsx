import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Flex } from "../Layout/Flex";

import { Avatar } from "./index";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex gap="30px">
      <Avatar
        url="https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg"
        alt="Avatar"
        variant="rounded"
      />
      <Avatar
        url="https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg"
        alt="Avatar"
        variant="circle"
      />
      <Avatar url="" alt="" fallback="Jarvis" />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="30px" alignItems="center">
      <Avatar
        url="https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg"
        alt="Avatar"
        size="extra-small"
      />
      <Avatar
        url="https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg"
        alt="Avatar"
        size="small"
      />
      <Avatar
        url="https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg"
        alt="Avatar"
        size="medium"
      />
      <Avatar
        url="https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg"
        alt="Avatar"
        size="large"
      />
      <Avatar
        url="https://t4.ftcdn.net/jpg/03/36/26/53/360_F_336265345_U65QKmIeAmmpaPM2C1QaQKhDG7AxoMl9.jpg"
        alt="Avatar"
        size="extra-large"
      />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Avatar>;
