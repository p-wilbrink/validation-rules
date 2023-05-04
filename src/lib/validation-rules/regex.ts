import { ValidatorFn } from '../validator-fn';
import { ValueAccessor } from '../value-accessor';
import { getValue, isEmptyInputvalue } from './utils';

/**
 * Regex Validator
 *
 * Checks if the value adheres to the given regex
 *
 * @param regex regex to check
 * @returns null if valid, `REGEX` otherwise
 */
export const regex =
  (regex: RegExp | string): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string => {
    const value: string = getValue(accessor);

    if (isEmptyInputvalue(regex) || isEmptyInputvalue(value)) {
      return null;
    }
    return (typeof regex === 'string' ? new RegExp(regex) : regex).test(value)
      ? null
      : 'REGEXP';
  };
