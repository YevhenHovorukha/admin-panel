import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";

export type InputErrorMessage =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined;
