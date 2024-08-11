import { FC } from "react";

import { Box } from "@src/components/Layout/Box";
import { Typography } from "@src/components/Typography";
import { usySpacing } from "@src/styles";

import { CommonCompProps } from "../../../@types/common-comp.props";

type PanelTitleProps = {
  title: string;
  size?: "medium" | "large" | "extra-large";
} & CommonCompProps;

export const PanelTitle: FC<PanelTitleProps> = ({
  name = "panel-title",
  title,
  size = "large",
  testId = name,
}) => {
  const getMarginBottom = () => {
    switch (size) {
      case "medium": {
        return usySpacing.px20;
      }
      case "large": {
        return usySpacing.px28;
      }
      case "extra-large": {
        return usySpacing.px40;
      }
    }
  };

  return (
    <Box marginProps={{ marginBottom: getMarginBottom() }}>
      <Typography weight="semibold" size={size} noMargin data-testid={testId}>
        {title}
      </Typography>
    </Box>
  );
};
