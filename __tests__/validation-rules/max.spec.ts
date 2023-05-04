import { max, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (
  accessor: ValueAccessor | string,
  criteria: number
) => string | null = (accessor: ValueAccessor | string, criteria: number) => {
  const validator: ValidatorFn = max(criteria);
  return validator(accessor);
};

describe("Max", () => {
  it("Should be valid when string does not exceed max", () => {
    const res = callValidator("10", 100);
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor does not exceed max", () => {
    const res = callValidator({ value: "10" }, 100);
    expect(res).toBeNull();
  });

  it("Should be invalid when string exceeds max", () => {
    const res = callValidator("100", 2);
    expect(res).toEqual("MAX");
  });

  it("Should be invalid when valueAccessor exceeds max", () => {
    const res = callValidator({ value: "100" }, 2);
    expect(res).toEqual("MAX");
  });

  it("Should be valid when string is not a number", () => {
    const res = callValidator("FOO", 1);
    expect(res).toBeNull();
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
