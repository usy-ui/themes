import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { MenuSeparator } from "./MenuOverlay/MenuSeparator";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuOverlay,
  DropdownMenuItem,
} from "./index";

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span>Open Dropdown</span>
      </DropdownMenuTrigger>
      <DropdownMenuOverlay>
        <DropdownMenuItem
          label="Change Password"
          onClick={() => {
            alert("Change password");
          }}
        />
        <DropdownMenuItem label="Settings" />
        <MenuSeparator />
        <DropdownMenuItem label="Logout" />
      </DropdownMenuOverlay>
    </DropdownMenu>
  ),
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;
