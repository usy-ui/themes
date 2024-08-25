/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from "react";

import clsx from "clsx";

import { CommonCompProps, FormFieldProps } from "../../@types";
import { FieldTitle, PureFieldTitleProps } from "../_internal/FieldTitle";

type SwitchProps = FormFieldProps<boolean> &
  PureFieldTitleProps &
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

  const handleChange = () => {
    setChecked(!checked);
    onChange?.(!checked);
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
