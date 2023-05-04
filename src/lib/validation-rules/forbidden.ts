import { ValidatorFn } from '../validator-fn';
import { ValueAccessor } from '../value-accessor';
import { isEmptyInputvalue, getValue } from './utils';

/**
 * Forbidden Validator
 *
 * Checks if the value is equal to one of the forbidden words
 *
 * @param string[] forbidden words
 * @returns null if valid, `FORBIDDEN` otherwise
 */
export const forbidden =
  (words: string[]): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string => {
    const value: string = getValue(accessor);

    if (isEmptyInputvalue(words) || isEmptyInputvalue(value)) {
      return null;
    }

    return words.indexOf(value) > -1 ? 'FORBIDDEN' : null;
  };
