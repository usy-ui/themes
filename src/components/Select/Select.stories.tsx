import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Select, SelectItemType } from "./index";

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
    const items: SelectItemType[] = [
      {
        id: "cats",
        label: "Cats",
        value: "cats",
      },
      {
        id: "dogs",
        label: "Dogs",
        value: "dogs",
      },
      {
        id: "fishes",
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
