import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { CaretLeftIcon, CaretRightIcon } from "../Icon";
import { Flex } from "../Layout/Flex";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex direction="column" gap="20px">
      <Flex gap="20px">
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="normal">Normal</Button>
        <Button variant="invisible">Invisible</Button>
      </Flex>
      <Flex gap="20px">
        <Button variant="normal" isDisabled>
          Disabled
        </Button>
        <Button variant="normal" isLoading>
          Loading
        </Button>
        <Button
          variant="normal"
          iconLeft={<CaretLeftIcon width="18px" height="18px" />}
        >
          Left Icon
        </Button>
        <Button
          variant="normal"
          iconRight={<CaretRightIcon width="18px" height="18px" />}
        >
          Right Icon
        </Button>
      </Flex>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="20px" alignItems="center">
      <Button variant="normal" size="small">
        small
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button variant="normal" size="medium">
        medium
      </Button>
      &nbsp; &nbsp; &nbsp;
      <Button variant="normal" size="large">
        large
      </Button>
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;
