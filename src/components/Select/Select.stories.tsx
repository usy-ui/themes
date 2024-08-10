import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Select, SelectItem } from "./index";

const meta: Meta<typeof Select> = {
  component: Select,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => {
    const items: SelectItem[] = [
      {
        label: "Cats",
        value: "cats",
      },
      {
        label: "Dogs",
        value: "dogs",
      },
      {
        label: "Fishes",
        value: "fishes",
      },
    ];
    return (
      <Select
        title="Select Animal"
        items={items}
        onChange={(item) => alert(item.value)}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Select>;
