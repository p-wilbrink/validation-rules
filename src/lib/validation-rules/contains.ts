import { ValidatorFn } from '../validator-fn';
import { ValueAccessor } from '../value-accessor';
import { getValue, isEmptyInputvalue } from './utils';

/**
 * Contains Validator
 *
 * Checks if the value contains a given string
 *
 * @param criteria Criteria to check
 * @returns null if valid, `CONTAINS` otherwise
 */
export const contains =
  (criteria: string): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string => {
    const value: string = getValue(accessor);

    if (isEmptyInputvalue(value)) {
      return null;
    }

    return value.includes(criteria) ? null : 'CONTAINS';
  };
