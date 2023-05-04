import { ValueAccessor } from '..';

/**
 * Checks if the input value is empty
 *
 * @param value
 * @return boolean
 */
export const isEmptyInputvalue = (value: any): boolean => {
  return (
    value === null ||
    ((typeof value === 'string' || Array.isArray(value)) && value.length === 0)
  );
};

/**
 * Returns the value from a value accessor
 *
 * @param value accessor
 * @return string
 */
export const getValue = (valueAccessor: ValueAccessor | string): string => {
  return typeof valueAccessor === 'string'
    ? valueAccessor
    : valueAccessor.value;
};
