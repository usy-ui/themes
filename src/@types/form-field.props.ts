export type FormFieldProps<T> = {
  value: T;
  disabled?: boolean;
  onChange?: (value: T) => void;
};
