import { FC, ReactNode } from "react";

import clsx from "clsx";

import { BaseTypographyTag } from "../..//@types/base.types";
import { Typography, TypographySize } from "../..//components/Typography";
import { CommonCompProps } from "../../@types/common-comp.props";

type PanelTitleProps = {
  title: string;
  description?: string | ReactNode;
  size?: TypographySize;
} & CommonCompProps;

const MappingHeadingTag: Record<TypographySize, BaseTypographyTag> = {
  "gigant-2": "h6",
  "gigant-1": "h6",
  "extra-large": "h5",
  large: "h4",
  medium: "h3",
  small: "p",
  "extra-small": "small",
};

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
        <Typography color="dark-1" size="small" className="description">
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
        tag={MappingHeadingTag[size]}
        weight="semibold"
        size={size}
        noMargin
      >
        {title}
      </Typography>
      {renderDescription()}
    </div>
  );
};
