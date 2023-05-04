import { ValidatorFn } from '../validator-fn';
import { ValueAccessor } from '../value-accessor';
import { getValue, isEmptyInputvalue } from './utils';

/**
 * Match Validator
 *
 * Checks if the value is equal to the given value accessor
 *
 * @param ValueAccessor other
 * @returns null if valid, `MATCH` otherwise
 */
export const match =
  (other: ValueAccessor | string): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string => {
    const value: string = getValue(accessor);
    const otherValue: string = getValue(other);

    if (isEmptyInputvalue(value)) {
      return null;
    }

    return value === otherValue ? null : 'MATCH';
  };
