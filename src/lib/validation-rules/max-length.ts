import { ValidatorFn } from "../validator-fn";
import { ValueAccessor } from "../value-accessor";
import { getValue, isEmptyInputvalue } from "./utils";

/**
 * Max length Validator
 *
 * Checks if the length of the value is less than the given length
 *
 * @param length max length of the value
 * @returns null if valid, `MAX_LENGTH` otherwise
 */
export const maxLength =
  (length: number): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string => {
    const value: string = getValue(accessor);
    if (isEmptyInputvalue(value)) {
      return null;
    }

    return value.length < length ? null : "MAX_LENGTH";
  };
