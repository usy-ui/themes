import { CSSProperties, FC } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks";

import { BaseColor } from "../../@types/base.types";
import { CommonCompProps } from "../../@types/common-comp.props";
import { WidthProps } from "../../@types/styles.props";
import { CopyIcon } from "../Icon";

type CopyableProps = {
  text: string;
  color?: BaseColor;
  widthProps?: WidthProps;
} & CommonCompProps;

export const Copyable: FC<CopyableProps> = ({
  name = "copyable",
  text,
  color = "primary-dark",
  widthProps,
  className,
  testId = name,
}) => {
  const colorInHex = useUsyColor(color);
  const cssVariables = {
    "--usy-copyable-color": colorInHex,
  } as CSSProperties;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className={clsx("usy-copyable-container", className)}
      style={{ ...cssVariables, ...widthProps }}
      data-testid={testId}
    >
      <pre className="text">{text}</pre>
      <button onClick={handleCopy} className="copy-icon">
        <CopyIcon />
      </button>
    </div>
  );
};
