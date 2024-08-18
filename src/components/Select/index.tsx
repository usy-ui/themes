/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, ReactNode, useState } from "react";

import clsx from "clsx";

import { useNameMemo, useOutsideClick } from "@src/hooks";

import { CommonCompProps } from "../../@types/common-comp.props";
import { FieldTitle, PureFieldTitleProps } from "../_internal/FieldTitle";
import { AngleDownIcon } from "../Icon";

export type SelectItemType<T = any> = {
  id: string | number;
  label: ReactNode;
  value: T;
};

type PureSelectProps = {
  items: SelectItemType[];
  isOpen?: boolean;
  value?: SelectItemType;
  onChange?: (item: SelectItemType) => void;
};

type SelectProps = PureSelectProps & PureFieldTitleProps & CommonCompProps;

export const Select = forwardRef<HTMLDivElement, SelectProps>(function Select(
  {
    name = "select",
    items = [],
    isOpen: initOpen,
    title,
    value,
    hasAsterisk,
    onChange,
    className,
    testId = name,
  },
  ref
) {
  const [isOpen, setIsOpen] = useState(initOpen || false);
  const [selectedItem, setSelectedItem] = useState<SelectItemType>(
    value || items[0]
  );

  const { nameMemo } = useNameMemo(name, "select");

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const { triggerRef, elementRef } = useOutsideClick(handleOutsideClick);

  const toggleSelect = () => setIsOpen(!isOpen);
  const handleChange = (item: SelectItemType) => {
    setSelectedItem(item);
    onChange?.(item);
    setIsOpen(false);
  };

  /**
   * Render
   */

  const renderDisplayField = () => {
    return (
      <div
        className="field-container"
        aria-hidden="true"
        onClick={toggleSelect}
        ref={triggerRef}
      >
        {selectedItem.label}
        <AngleDownIcon />
      </div>
    );
  };

  const renderMenuOverlay = () => {
    if (!isOpen) {
      return;
    }

    return (
      <div className="menu-overlay" ref={elementRef}>
        <ul>
          {items.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                aria-hidden="true"
                className="item-container"
              >
                <p className="item-label">{item.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div
      className={clsx("usy-select-container", className)}
      data-testid={testId}
      ref={ref}
    >
      {title && (
        <FieldTitle
          name={nameMemo}
          hasAsterisk={hasAsterisk}
          title={title}
          testId={`${testId}-title`}
        />
      )}
      {renderDisplayField()}
      {renderMenuOverlay()}
    </div>
  );
});
