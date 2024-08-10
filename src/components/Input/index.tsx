import {
  ChangeEvent,
  FocusEvent,
  ReactNode,
  forwardRef,
  useEffect,
  useState,
} from "react";

import clsx from "clsx";

import { useNameMemo } from "@src/hooks/useNameMemo";

import { ExtraCompProps } from "../../types/extra-comp.props";
import { FieldTitle, PureFieldTitleProps } from "../_internal/FieldTitle";

import { InputDescription } from "./components/InputDescription";
import { InputIconLeft } from "./components/InputIconLeft";
import { InputIconRight } from "./components/InputIconRight";

export type PureInputProps = {
  value?: string;
  type?: "text" | "number";
  maxWidth?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  placeholder?: string;
  description?: ReactNode;
  hasError?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>, value: string) => void;
  formatOnChange?: (value: string) => string;
  formatOnBlur?: (value: string) => string;
} & PureFieldTitleProps;

export type InputProps = PureInputProps & ExtraCompProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    name = "input",
    value = "",
    title,
    type = "text",
    maxWidth = "unset",
    iconLeft,
    iconRight,
    placeholder,
    description,
    hasAsterisk = false,
    hasError = false,
    onChange,
    onBlur,
    formatOnChange = (value) => value,
    formatOnBlur = (value) => value,
    className,
    testId = name,
  },
  ref
) {
  const [inputValue, setInputValue] = useState(value);
  const { nameMemo } = useNameMemo(name, "input");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatOnChange(e.target.value);
    setInputValue(formattedValue);
    onChange?.(e, formattedValue);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    const formattedValue = formatOnBlur(e.target.value);
    setInputValue(formattedValue);
    onBlur?.(e, formattedValue);
  };

  /**
   * Render
   */

  const renderInput = () => {
    return (
      <input
        ref={ref}
        id={nameMemo}
        name={nameMemo}
        value={inputValue}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        className="input"
        data-testid={`${testId}-input`}
      />
    );
  };

  return (
    <div className={clsx("usy-input-container", className)}>
      {title && (
        <FieldTitle
          name={nameMemo}
          hasAsterisk={hasAsterisk}
          title={title}
          testId={`${testId}-title`}
        />
      )}
      <div
        className={clsx("input-container", {
          "has-error": hasError,
        })}
        style={{ maxWidth }}
        data-testid={testId}
      >
        <InputIconLeft iconLeft={iconLeft} testId={testId} />
        {renderInput()}
        <InputIconRight iconRight={iconRight} testId={testId} />
      </div>
      <InputDescription description={description} testId={testId} />
    </div>
  );
});
