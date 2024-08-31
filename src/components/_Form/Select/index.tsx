/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { forwardRef, ReactNode, useCallback, useState } from "react";

import clsx from "clsx";

import { useOutsideClick } from "@src/hooks";

import { CommonCompProps, FormFieldProps } from "../../../@types";
import { FieldTitle, PureFieldTitleProps } from "../../_Form/FieldTitle";
import { ChevronSortIcon } from "../../Icon";

export type SelectItemType<T = any> = {
  id: string | number;
  label: ReactNode;
  value: T;
};

type PureSelectProps = {
  items: SelectItemType[];
  isOpen?: boolean;
};

type SelectProps = PureSelectProps &
  PureFieldTitleProps &
  Omit<FormFieldProps<SelectItemType>, "hasError" | "disabled"> &
  CommonCompProps;

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

  const handleOutsideClick = useCallback(() => {
    setIsOpen(false);
  }, []);

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
        className="display-field"
        aria-hidden="true"
        role="button"
        onClick={toggleSelect}
        ref={triggerRef}
      >
        {selectedItem.label}
        <ChevronSortIcon />
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
          name={name}
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
