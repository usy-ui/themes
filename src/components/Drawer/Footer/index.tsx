import { FC } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../../@types";
import { Button, ButtonVariant } from "../../../components/Button";

interface DrawerButtonProps {
  label: string;
  variant: ButtonVariant;
  onClick: () => void;
  testId?: string;
}

type DrawerFooterProps = {
  alignContent?: "left" | "center" | "right";
  buttons: DrawerButtonProps[];
} & CommonCompProps;

export const DrawerFooter: FC<DrawerFooterProps> = ({
  name = "drawer-footer",
  alignContent = "right",
  buttons,
  className,
  testId = name,
}) => {
  return (
    <div
      className={clsx(
        "usy-drawer-footer-container",
        `align-content-${alignContent}`,
        className
      )}
      data-testid={testId}
    >
      {(buttons || []).map(
        ({ variant, label, onClick, testId: buttonTestId }) => (
          <Button
            key={label}
            variant={variant}
            onClick={onClick}
            className={clsx("cta-button")}
            testId={buttonTestId}
          >
            {label}
          </Button>
        )
      )}
    </div>
  );
};
