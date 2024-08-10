import { FC, ReactNode } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";

import { ExtraCompProps } from "../../types/extra-comp.props";
import { MarginProps, PaddingProps } from "../../types/margin-padding.props";
import { HeightProps, WidthProps } from "../../types/width-height.props";

export { PanelTitle } from "./PanelTitle";

type PurePanelProps = {
  title?: ReactNode;
  widthProps?: WidthProps;
  heightProps?: HeightProps;
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
  borderRadius?: string;
  children: ReactNode;
};
type PanelProps = PurePanelProps & ExtraCompProps;

export const Panel: FC<PanelProps> = ({
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
}) => {
  return (
    <div
      className={clsx("usy-panel-container", className)}
      style={{
        ...widthProps,
        ...heightProps,
        ...(paddingProps || { padding: usySpacing.px24 }),
        ...marginProps,
        borderRadius,
      }}
      data-testid={testId}
    >
      {title}
      {children}
    </div>
  );
};
