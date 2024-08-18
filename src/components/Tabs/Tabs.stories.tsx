import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { Tabs } from "./index";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => {
    return (
      <Tabs
        tabs={[
          {
            id: "tab-1",
            label: "Tab 1",
            content: (
              <div>
                <input />
              </div>
            ),
          },
          { id: "tab-2", label: "Tab 2", content: <div>This is tab 2</div> },
          { id: "tab-3", label: "Tab 3", content: <div>This is tab 3</div> },
        ]}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;
