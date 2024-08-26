export type FormFieldProps<T> = {
  value?: T;
  disabled?: boolean;
  onChange?: (value: T) => void;
  onBlur?: (value: T) => void;
};
