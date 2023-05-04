import { ValidatorFn } from "../validator-fn";
import { ValueAccessor } from "../value-accessor";
import { getValue, isEmptyInputvalue } from "./utils";

/**
 * Ends with Validator
 *
 * Checks if the value ends with a given string
 *
 * @param criteria Criteria to check
 * @returns null if valid, `ENDS_WITH` otherwise
 */
export const endsWith =
  (criteria: string): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string => {
    const value: string = getValue(accessor);

    if (isEmptyInputvalue(value)) {
      return null;
    }

    return value.endsWith(criteria) ? null : "ENDS_WITH";
  };
