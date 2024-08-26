import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  useEffect,
  useState,
} from "react";

import clsx from "clsx";

import { useNameMemo } from "@src/hooks";
import { usyElement } from "@src/styles";

import { type CommonCompProps } from "../../../@types";
import { FieldTitle } from "../FieldTitle";
import { PureInputProps } from "../Input";
import { InputDescription } from "../Input/components/InputDescription";

type PickedInputProps = Pick<
  PureInputProps,
  | "name"
  | "value"
  | "title"
  | "maxWidth"
  | "placeholder"
  | "description"
  | "hasAsterisk"
  | "hasError"
>;

type MoreTextAreaProps = {
  maxHeight?: string;
  minHeight?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>, value: string) => void;
};

type TextAreaProps = PickedInputProps & MoreTextAreaProps & CommonCompProps;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      name,
      value = "",
      title,
      maxWidth = "unset",
      maxHeight = "200px",
      minHeight = usyElement.heightMedium,
      placeholder,
      description,
      hasAsterisk = false,
      hasError = false,
      onChange,
      onBlur,
      className,
      testId,
    },
    ref
  ) {
    const [inputValue, setInputValue] = useState(value);
    const { nameMemo } = useNameMemo(name, "textarea");

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
      onChange?.(e, e.target.value);
    };

    const handleOnBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
      onBlur?.(e, e.target.value);
    };

    /**
     * Render
     */

    const renderTextArea = () => {
      return (
        <textarea
          ref={ref}
          id={nameMemo}
          name={nameMemo}
          value={inputValue}
          data-testid={testId}
          placeholder={placeholder}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className={clsx("textarea", {
            "has-error": hasError,
          })}
          style={{ maxWidth, maxHeight, minHeight }}
        />
      );
    };

    return (
      <div className={clsx("usy-textarea-container", className)}>
        {title && (
          <FieldTitle
            name={nameMemo}
            hasAsterisk={hasAsterisk}
            title={title}
            testId={`${testId}-title`}
          />
        )}
        {renderTextArea()}
        <InputDescription description={description} testId={testId} />
      </div>
    );
  }
);
