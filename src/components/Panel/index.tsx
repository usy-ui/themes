import { forwardRef, ReactNode } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";

import { BaseTag } from "../..//@types/base.types";
import { CommonCompProps } from "../../@types/common-comp.props";
import {
  HeightProps,
  WidthProps,
  MarginProps,
  PaddingProps,
} from "../../@types/styles.props";

type PurePanelProps = {
  tag?: BaseTag;
  title?: ReactNode;
  borderRadius?: string;
  children: ReactNode;
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
    widthProps,
    heightProps,
    paddingProps,
    marginProps,
    borderRadius = usySpacing.px6,
    children,
    className,
    testId = name,
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("usy-panel-container", className)}
      style={{
        ...widthProps,
        ...heightProps,
        ...(paddingProps || {
          padding: `${usySpacing.px20} ${usySpacing.px24} ${usySpacing.px24}`,
        }),
        ...marginProps,
        borderRadius,
      }}
      data-testid={testId}
    >
      {title}
      {children}
    </div>
  );
});
