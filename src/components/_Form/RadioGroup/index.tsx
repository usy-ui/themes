import { ChangeEvent, FC, useEffect, useState } from "react";

import clsx from "clsx";

import { CommonCompProps, FormFieldProps } from "../../../@types";
import { FieldTitle, PureFieldTitleProps } from "../../_Form/FieldTitle";

type RadioType = {
  id: string;
  label: string;
  value: string;
};

type RadioGroupProps = {
  items: RadioType[];
  direction?: "vertical" | "horizontal";
} & PureFieldTitleProps &
  Omit<FormFieldProps<RadioType, HTMLInputElement>, "hasError" | "disabled"> &
  CommonCompProps;

export const RadioGroup: FC<RadioGroupProps> = ({
  title,
  value,
  items,
  direction = "horizontal",
  onChange,
  className,
  name = "radio-group",
  testId = name,
}) => {
  const [selectedItem, setSelectedItem] = useState<RadioType>(
    value || items[0]
  );

  useEffect(() => {
    if (value) {
      setSelectedItem(value);
    }
  }, [value]);

  const handleChange = (item: RadioType, e: ChangeEvent<HTMLInputElement>) => {
    setSelectedItem(item);
    onChange?.(item, e);

    console.log(name);
  };

  return (
    <div
      className={clsx("usy-radio-group-container", className)}
      data-testid={testId}
    >
      {title && (
        <FieldTitle name={name} title={title} testId={`${testId}-title`} />
      )}
      <div
        className={clsx("radio-group-container", {
          [`direction-${direction}`]: Boolean(direction),
        })}
      >
        {items.map((item) => {
          const itemId = `${name}-${item.id}`;

          return (
            <label key={itemId} htmlFor={itemId} className="radio-item">
              <input
                type="radio"
                id={itemId}
                name={name}
                checked={item.value === selectedItem.value}
                onChange={(e) => handleChange(item, e)}
                className="input"
              />
              <span className="label">{item.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
