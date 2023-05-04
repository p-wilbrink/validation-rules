import { ValidatorFn } from '../validator-fn';
import { ValueAccessor } from '../value-accessor';
import { getValue } from './utils';

/**
 * Required Validator
 *
 * Checks if the value is present
 *
 * @returns null if valid, `REQUIRED` otherwise
 */
export const required =
  (): ValidatorFn =>
  (accessor: ValueAccessor | string): null | string =>
    getValue(accessor) ? null : 'REQUIRED';
