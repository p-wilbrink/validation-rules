import { ValidatorFn } from '../validator-fn';
import { ValueAccessor } from '../value-accessor';
import { getValue, isEmptyInputvalue } from './utils';

/**
 * Starts with Validator
 *
 * Checks if the value starts with a given string
 *
 * @param criteria Criteria to check
 * @returns null if valid, `STARTS_WITH` otherwise
 */
export const startsWith =
  (criteria: string): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string => {
    const value: string = getValue(accessor);

    if (isEmptyInputvalue(value)) {
      return null;
    }

    return value.startsWith(criteria) ? null : 'STARTS_WITH';
  };
