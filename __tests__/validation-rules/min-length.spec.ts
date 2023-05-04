import { minLength, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (
  accessor: ValueAccessor | string,
  criteria: number
) => string | null = (accessor: ValueAccessor | string, criteria: number) => {
  const validator: ValidatorFn = minLength(criteria);
  return validator(accessor);
};

describe("MinLength", () => {
  it("Should be valid when string does not exceed min length", () => {
    const res = callValidator("FOO", 2);
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor does not exceed min length", () => {
    const res = callValidator({ value: "FOO" }, 2);
    expect(res).toBeNull();
  });

  it("Should be invalid when string exceeds min length", () => {
    const res = callValidator("FOO", 100);
    expect(res).toEqual("MIN_LENGTH");
  });

  it("Should be invalid when valueAccessor exceeds min length", () => {
    const res = callValidator({ value: "FOO" }, 100);
    expect(res).toEqual("MIN_LENGTH");
  });

  it("Should be valid when string is empty", () => {
    const res = callValidator("", 10);
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor is empty", () => {
    const res = callValidator({ value: "" }, 10);
    expect(res).toBeNull();
  });
});
