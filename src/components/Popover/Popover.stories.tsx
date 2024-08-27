import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Box } from "../_Layout/Box";
import { Button } from "../Button";

import { Popover } from "./index";
import { Flex } from "../_Layout/Flex";
import { usySpacing } from "../../styles";

const meta: Meta<typeof Popover> = {
  component: Popover,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Flex direction="column" alignItems="center" gap={usySpacing.px40}>
      <Flex
        widthProps={{ width: "350px" }}
        justifyContent="space-between"
        gap={usySpacing.px32}
      >
        <Popover content="This is this the first line" position="top">
          <Button>Top</Button>
        </Popover>
        <Popover
          content={
            <Box widthProps={{ width: "250px" }}>
              This is this the first line\nThis is this the first line
            </Box>
          }
          position="bottom"
        >
          <Button>Bottom</Button>
        </Popover>
      </Flex>
      <Flex
        widthProps={{ width: "350px" }}
        justifyContent="space-between"
        gap={usySpacing.px32}
      >
        <Popover
          content={
            <Box widthProps={{ width: "250px" }}>
              This is this the first line\nThis is this the first line
            </Box>
          }
          position="left"
        >
          <Button>Left</Button>
        </Popover>
        <Popover
          content={
            <Box widthProps={{ width: "250px" }}>
              This is this the first line\nThis is this the first line
            </Box>
          }
          position="right"
        >
          <Button>Right</Button>
        </Popover>
      </Flex>
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Popover>;
