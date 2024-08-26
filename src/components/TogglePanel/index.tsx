"use client";
import { forwardRef, ReactNode, useState } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../@types";
import { AngleDownIcon } from "../Icon";

export type TogglePanelProps = {
  title: ReactNode;
  isExpand?: boolean;
  maxWidth?: string;
  maxContentHeight?: string;
  children: ReactNode;
  onToggle?: (isExpand: boolean) => void;
} & CommonCompProps;

export const TogglePanel = forwardRef<HTMLDivElement, TogglePanelProps>(
  function TogglePanel(
    {
      name = "toggle-panel",
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
          role="button"
          aria-hidden="true"
          className="usy-toggle-panel-header"
          onClick={handleToggle}
          data-testid={`${testId}-header`}
        >
          <label className="title" data-testid={`${testId}-header-title`}>
            {title}
          </label>
          <AngleDownIcon
            className={clsx("arrow-icon", {
              expanded: isExpand,
            })}
            data-testid={`${testId}-header-toggle`}
          />
        </div>
      );
    };

    const renderContent = () => {
      return (
        <div
          className={clsx("usy-toggle-panel-content")}
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
          "usy-toggle-panel-container",
          {
            expanded: isExpand,
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
