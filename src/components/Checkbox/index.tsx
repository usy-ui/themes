import { ReactNode, forwardRef, useState } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../@types";
import { Typography } from "../Typography";

type CheckboxProps = {
  label: ReactNode;
  value?: boolean;
  onChange?: (checked: boolean) => void;
} & CommonCompProps;

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

    const handleCheck = () => {
      setChecked(!checked);
      onChange?.(!checked);
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
