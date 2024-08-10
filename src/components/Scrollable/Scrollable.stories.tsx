import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";
import { Box } from "../Layout/Box";

import { Scrollable } from "./index";

const meta: Meta<typeof Scrollable> = {
  component: Scrollable,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <Scrollable
      widthProps={{ widthHeight: "a" }}
      heightProps={{ maxHeight: "400px" }}
    >
      <Box
        widthProps={{ maxWidth: "300px" }}
        heightProps={{ minHeight: "1400px" }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry is standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </Box>
    </Scrollable>
  ),
};

export default meta;
type Story = StoryObj<typeof Scrollable>;
