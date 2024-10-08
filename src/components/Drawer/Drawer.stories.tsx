import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorator } from "../../../.storybook/decorators";

import { DrawerContent } from "./Content";
import { DrawerFooter } from "./Footer";
import { DrawerHeader } from "./Header";

import { Drawer } from "./index";
import { Button } from "../Button";
import { Flex } from "../_Layout/Flex";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  decorators: [ThemeProviderDecorator],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

const TriggerDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open Drawer</Button>
      {isOpen && (
        <Drawer
          header={<DrawerHeader title="Drawer" onClose={closeModal} />}
          footer={
            <DrawerFooter
              alignContent="center"
              buttons={[
                {
                  variant: "primary",
                  label: "Confirm",
                  onClick: () => alert("Confirmed"),
                },
                {
                  variant: "normal",
                  label: "Cancel",
                  onClick: () => alert("Canceled"),
                },
              ]}
            />
          }
        >
          <DrawerContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export const Types: Story = {
  render: () => (
    <Flex
      heightProps={{ minHeight: "150vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <TriggerDrawer />
    </Flex>
  ),
};

export default meta;
type Story = StoryObj<typeof Drawer>;
