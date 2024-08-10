import { ReactNode, forwardRef, useState } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "../../types/extra-comp.props";

type CheckboxProps = {
  label: ReactNode;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
} & ExtraCompProps;

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
