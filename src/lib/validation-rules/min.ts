import { ValidatorFn } from '../validator-fn';
import { ValueAccessor } from '../value-accessor';
import { getValue, isEmptyInputvalue } from './utils';

/**
 * Min Validator
 *
 * Checks if the value is more than the given min number
 *
 * @param length min number of the value
 * @returns null if valid, `MIN` otherwise
 */
export const min =
  (min: number): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string => {
    const value: string = getValue(accessor);

    if (isEmptyInputvalue(min) || isEmptyInputvalue(value)) {
      return null;
    }

    const floatedValue = parseFloat(value);

    return !isNaN(floatedValue) && floatedValue < min ? 'MIN' : null;
  };
