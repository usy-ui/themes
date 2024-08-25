import { forwardRef } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../@types/common-comp.props";
import {
  MarginProps,
  PaddingProps,
  WidthProps,
} from "../../@types/styles.props";

import { AccordionItem, AccordionItemType } from "./AccordionItem";

type AccordionProps = {
  items: AccordionItemType[];
} & WidthProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion(
    {
      items,
      widthProps,
      marginProps,
      paddingProps,
      name = "accordion",
      className,
      testId = name,
    },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={clsx("usy-accordion-container", className)}
        style={{ ...widthProps, ...marginProps, ...paddingProps }}
        data-testid={testId}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
            testId={`${testId}-accordion-item`}
          />
        ))}
      </div>
    );
  }
);
