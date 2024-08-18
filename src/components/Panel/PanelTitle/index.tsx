import { FC, ReactNode } from "react";

import clsx from "clsx";

import { Typography, TypographySize } from "../../..//components/Typography";
import { CommonCompProps } from "../../../@types/common-comp.props";

type PanelTitleProps = {
  title: string;
  description?: string | ReactNode;
  size?: TypographySize;
} & CommonCompProps;

export const PanelTitle: FC<PanelTitleProps> = ({
  name = "panel-title",
  title,
  description,
  size = "large",
  className,
  testId = name,
}) => {
  const renderDescription = () => {
    if (!description) {
      return null;
    }

    if (typeof description === "string") {
      return (
        <Typography color="dark-1" size="small" noMargin>
          {description}
        </Typography>
      );
    }

    return description;
  };

  return (
    <div
      className={clsx(
        "usy-panel-title-container",
        {
          [`mt-${size}`]: Boolean(size),
        },
        className
      )}
      data-testid={testId}
    >
      <Typography
        tag="h4"
        weight="semibold"
        size={size}
        className="description"
        noMargin
      >
        {title}
      </Typography>
      {renderDescription()}
    </div>
  );
};
