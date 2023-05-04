import { ValueAccessor } from './value-accessor';

export type ValidatorFn = (accessor: ValueAccessor | string) => null | string;
