import { forwardRef, ReactNode, useState } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../@types/common-comp.props";
import { AngleDownIcon } from "../Icon";

export type ToggleSectionProps = {
  title: ReactNode;
  isExpand?: boolean;
  maxWidth?: string;
  maxContentHeight?: string;
  children: ReactNode;
  onToggle?: (isExpand: boolean) => void;
} & CommonCompProps;

export const ToggleSection = forwardRef<HTMLDivElement, ToggleSectionProps>(
  function ToggleSection(
    {
      name = "toggle-section",
      title,
      isExpand: isDefExpand = false,
      maxWidth,
      maxContentHeight = "unset",
      children,
      onToggle,
      className,
      testId = name,
    },
    ref
  ) {
    const [isExpand, setIsExpand] = useState(isDefExpand);

    const handleToggle = () => {
      setIsExpand(!isExpand);
      onToggle?.(!isExpand);
    };

    /**
     * Render
     */

    const renderHeader = () => {
      return (
        <div
          className="usy-toggle-section-header"
          data-testid={`${testId}-header`}
        >
          <label className="title" data-testid={`${testId}-header-title`}>
            {title}
          </label>
          <AngleDownIcon
            onClick={handleToggle}
            className={clsx("arrow-icon", {
              "is-expanded": isExpand,
            })}
            data-testid={`${testId}-header-toggle`}
          />
        </div>
      );
    };

    const renderContent = () => {
      return (
        <div
          className={clsx("usy-toggle-section-content")}
          style={{ maxHeight: maxContentHeight }}
          data-testid={`${testId}-content`}
        >
          {children}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={clsx(
          "usy-toggle-section-container",
          {
            "is-expanded": isExpand,
          },
          className
        )}
        style={{ maxWidth }}
        data-testid={testId}
      >
        {renderHeader()}
        {renderContent()}
      </div>
    );
  }
);
