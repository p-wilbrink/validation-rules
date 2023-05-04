import { ValidatorFn } from '../validator-fn';
import { ValueAccessor } from '../value-accessor';
import { getValue, isEmptyInputvalue } from './utils';

/**
 * Min length Validator
 *
 * Checks if the length of the value is more or equal than the given length
 *
 * @param length min length of the value
 * @returns null if valid, `MIN_LENGTH` otherwise
 */
export const minLength =
  (length: number): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string => {
    const value: string = getValue(accessor);

    if (isEmptyInputvalue(length) || isEmptyInputvalue(value)) {
      return null;
    }

    return value.length >= length ? null : 'MIN_LENGTH';
  };
