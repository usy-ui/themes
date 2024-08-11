import { ReactNode, forwardRef, useState } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../types/common-comp.props";

type CheckboxProps = {
  label: ReactNode;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
} & CommonCompProps;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      name = "checkbox",
      label,
      isChecked = false,
      onChange,
      className,
      testId = name,
    },
    ref
  ) {
    const [checked, setChecked] = useState(isChecked);

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
        {label}
      </label>
    );
  }
);
