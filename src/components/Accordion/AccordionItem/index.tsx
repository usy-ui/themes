import { FC, ReactNode, useState } from "react";

import clsx from "clsx";

import { AngleDownIcon } from "@src/components/Icon";
import { Typography } from "@src/components/Typography";

import { CommonCompProps } from "../../../@types";

export type AccordionItemType = {
  id: string;
  title: string | ReactNode;
  content: ReactNode;
};

type AccordionItemProps = AccordionItemType & CommonCompProps;

export const AccordionItem: FC<AccordionItemProps> = ({
  title,
  content,
  name = "accordion-item",
  className,
  testId = name,
}) => {
  const [isExpand, setIsExpand] = useState(false);

  const toggle = () => {
    setIsExpand(!isExpand);
  };

  /**
   * Render
   */

  const renderTitle = () => {
    if (typeof title === "string") {
      return (
        <Typography tag="h3" size="medium" weight="semibold">
          {title}
        </Typography>
      );
    }

    return title;
  };

  const renderContent = () => {
    return isExpand && content;
  };

  return (
    <div
      className={clsx("usy-accordion-item-container", className)}
      data-testid={testId}
    >
      <div
        role="button"
        aria-hidden="true"
        className="title-container"
        onClick={toggle}
      >
        {renderTitle()}
        <AngleDownIcon
          className={clsx("arrow-icon", {
            expanded: isExpand,
          })}
        />
      </div>
      <div
        className={clsx("content-container", {
          hidden: !isExpand,
        })}
      >
        {renderContent()}
      </div>
    </div>
  );
};
