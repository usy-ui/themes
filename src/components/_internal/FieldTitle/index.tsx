import { FC } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../../types/common-comp.props";

export type PureFieldTitleProps = {
  name?: string;
  title?: string;
  hasAsterisk?: boolean;
};

type FieldTitleProps = PureFieldTitleProps & CommonCompProps;

export const FieldTitle: FC<FieldTitleProps> = ({
  name = "field-title",
  hasAsterisk,
  title,
  className,
  testId = name,
}) => {
  return (
    title && (
      <label
        className={clsx("usy-field-title-container", className)}
        htmlFor={name}
        data-testid={testId}
      >
        {title}
        {hasAsterisk && <span className="asterisk">*</span>}
      </label>
    )
  );
};
