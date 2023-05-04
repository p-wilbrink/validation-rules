import { maxLength, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (
  accessor: ValueAccessor | string,
  criteria: number
) => string | null = (accessor: ValueAccessor | string, criteria: number) => {
  const validator: ValidatorFn = maxLength(criteria);
  return validator(accessor);
};

describe("MaxLength", () => {
  it("Should be valid when string does not exceed max length", () => {
    const res = callValidator("FOO", 100);
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor does not exceed max length", () => {
    const res = callValidator({ value: "FOO" }, 100);
    expect(res).toBeNull();
  });

  it("Should be invalid when string exceeds max length", () => {
    const res = callValidator("FOO", 2);
    expect(res).toEqual("MAX_LENGTH");
  });

  it("Should be invalid when valueAccessor exceeds max length", () => {
    const res = callValidator({ value: "FOO" }, 2);
    expect(res).toEqual("MAX_LENGTH");
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
