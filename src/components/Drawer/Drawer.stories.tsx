import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { DrawerContent } from "./Content";
import { DrawerFooter } from "./Footer";
import { DrawerHeader } from "./Header";

import { Drawer } from "./index";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export const Types: Story = {
  render: () => (
    <>
      <Drawer
        header={<DrawerHeader title="Drawer" onClose={() => alert("close")} />}
        footer={
          <DrawerFooter
            alignContent="center"
            buttons={[
              {
                type: "primary",
                label: "Confirm",
                onClick: () => alert("Confirmed"),
              },
              {
                type: "normal",
                label: "Cancel",
                onClick: () => alert("Canceled"),
              },
            ]}
          />
        }
        isOpen
      >
        <DrawerContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book
        </DrawerContent>
      </Drawer>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof Drawer>;
