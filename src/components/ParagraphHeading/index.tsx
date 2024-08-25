import { FC, ReactNode } from "react";

import clsx from "clsx";

import { BaseTypographyTag, CommonCompProps, MarginProps } from "../../@types";
import { Typography, TypographySize } from "../Typography";

type ParagraphHeadingProps = {
  title: string;
  description?: string | ReactNode;
  size?: TypographySize;
} & MarginProps &
  CommonCompProps;

const MappingHeadingTag: Record<TypographySize, BaseTypographyTag> = {
  tiny: "small",
  small: "small",
  medium: "p",
  large: "h3",
  huge: "h4",
  "gigant-2": "h5",
  "gigant-1": "h6",
};

export const ParagraphHeading: FC<ParagraphHeadingProps> = ({
  name = "paragraph-heading",
  title,
  description,
  size = "large",
  marginProps,
  className,
  testId = name,
}) => {
  const renderDescription = () => {
    if (!description) {
      return null;
    }

    if (typeof description === "string") {
      return (
        <Typography color="dark-1" size="medium" className="description">
          {description}
        </Typography>
      );
    }

    return description;
  };

  return (
    <div
      className={clsx(
        "usy-paragraph-heading-container",
        {
          [`mt-${size}`]: Boolean(size),
        },
        className
      )}
      style={{ ...marginProps }}
      data-testid={testId}
    >
      <Typography tag={MappingHeadingTag[size]} weight="semibold" size={size}>
        {title}
      </Typography>
      {renderDescription()}
    </div>
  );
};
