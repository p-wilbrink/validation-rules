import { ValidatorFn } from "../validator-fn";
import { ValueAccessor } from "../value-accessor";
import { getValue, isEmptyInputvalue } from "./utils";

/**
 * Max Validator
 *
 * Checks if the value is less than the given max number
 *
 * @param length max number of the value
 * @returns null if valid, `MAX` otherwise
 */
export const max =
  (max: number): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string => {
    const value: string = getValue(accessor);

    if (isEmptyInputvalue(max) || isEmptyInputvalue(value)) {
      return null;
    }

    const floatedValue = parseFloat(value);

    return !isNaN(floatedValue) && floatedValue > max ? "MAX" : null;
  };
