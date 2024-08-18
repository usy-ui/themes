import { forwardRef } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../@types/common-comp.props";

import { AccordionItem, AccordionItemType } from "./AccordionItem";

type AccordionProps = {
  items: AccordionItemType[];
} & CommonCompProps;

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion({ items }, ref) {
    return (
      <div ref={ref} className={clsx("usy-accordion-container")}>
        {items.map((item) => (
          <AccordionItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
);
