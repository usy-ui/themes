/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";
import { ChangeEvent, FC, useState } from "react";

import clsx from "clsx";

import { CommonCompProps, FormFieldProps } from "../../../@types";
import { FieldTitle, PureFieldTitleProps } from "../FieldTitle";

type SwitchProps = PureFieldTitleProps &
  Omit<FormFieldProps<boolean, HTMLInputElement>, "hasError" | "disabled"> &
  CommonCompProps;

export const Switch: FC<SwitchProps> = ({
  title,
  hasAsterisk,
  value,
  onChange,
  className,
  name = "switch",
  testId = name,
}) => {
  const [checked, setChecked] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange?.(!checked, e);
  };

  return (
    <div
      className={clsx("usy-switch-container", className)}
      data-testid={testId}
    >
      {title && (
        <FieldTitle
          name={name}
          hasAsterisk={hasAsterisk}
          title={title}
          testId={`${testId}-title`}
        />
      )}
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={handleChange}
        className="input"
      />
      <label htmlFor={name} aria-hidden="true" className="switch" />
    </div>
  );
};
