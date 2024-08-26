"use client";
import { ChangeEvent, ReactNode, forwardRef, useEffect, useState } from "react";

import clsx from "clsx";

import { CommonCompProps, FormFieldProps } from "../../../@types";
import { Typography } from "../../Typography";

type CheckboxProps = {
  label: ReactNode;
} & Omit<FormFieldProps<boolean, HTMLInputElement>, "hasError" | "disabled"> &
  CommonCompProps;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      name = "checkbox",
      label,
      value = false,
      onChange,
      className,
      testId = name,
    },
    ref
  ) {
    const [checked, setChecked] = useState(value);

    useEffect(() => {
      setChecked(value);
    }, [value]);

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(!checked);
      onChange?.(!checked, e);
    };

    return (
      <label
        data-testid={testId}
        className={clsx("usy-checkbox-container", className)}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className={clsx("input", {
            checked,
          })}
          data-testid={`${testId}-input`}
        />
        <Typography size="small">{label}</Typography>
      </label>
    );
  }
);
