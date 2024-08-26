import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { RadioGroup } from "./index";
import { Flex } from "../Layout/Flex";
import { usySpacing } from "../../styles";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

const items = [
  { id: "dog", label: "dog", value: "dog" },
  { id: "cat", label: "cat", value: "cat" },
  { id: "fish", label: "fish", value: "fish" },
];

export const Types: Story = {
  render: () => {
    return (
      <Flex direction="column" gap={usySpacing.px20}>
        <RadioGroup
          name="animal-1"
          title="Select type"
          value={items[0]}
          items={items}
          direction="horizontal"
          onChange={(item) => alert(item.value)}
        />
        <RadioGroup
          name="animal-2"
          title="Select type"
          value={items[0]}
          items={items}
          direction="vertical"
        />
      </Flex>
    );
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;
