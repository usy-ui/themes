import { forwardRef, ReactNode } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";

import { BaseSemanticTag } from "../..//@types/base.types";
import { CommonCompProps } from "../../@types/common-comp.props";
import {
  HeightProps,
  WidthProps,
  MarginProps,
  PaddingProps,
} from "../../@types/styles.props";
import { Typography } from "../Typography";

type PurePanelProps = {
  tag?: BaseSemanticTag;
  title?: ReactNode;
  hasBorder?: boolean;
  children: string | ReactNode;
};
type PanelProps = PurePanelProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Panel = forwardRef<HTMLDivElement, PanelProps>(function Panel(
  {
    name = "panel",
    title,
    hasBorder = true,
    widthProps,
    heightProps,
    paddingProps,
    marginProps,
    children,
    className,
    testId = name,
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        "usy-panel-container",
        {
          "has-border": Boolean(hasBorder),
        },
        className
      )}
      style={{
        ...widthProps,
        ...heightProps,
        ...(paddingProps || {
          padding: `${usySpacing.px20} ${usySpacing.px24} ${usySpacing.px24}`,
        }),
        ...marginProps,
      }}
      data-testid={testId}
    >
      {title}
      {typeof children === "string" ? (
        <Typography size="medium">{children}</Typography>
      ) : (
        children
      )}
    </div>
  );
});
