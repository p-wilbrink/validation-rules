import { min, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (
  accessor: ValueAccessor | string,
  criteria: number
) => string | null = (accessor: ValueAccessor | string, criteria: number) => {
  const validator: ValidatorFn = min(criteria);
  return validator(accessor);
};

describe("Min", () => {
  it("Should be valid when string does not exceed min", () => {
    const res = callValidator("100", 10);
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor does not exceed min", () => {
    const res = callValidator({ value: "100" }, 10);
    expect(res).toBeNull();
  });

  it("Should be invalid when string exceeds min", () => {
    const res = callValidator("10", 100);
    expect(res).toEqual("MIN");
  });

  it("Should be invalid when valueAccessor exceeds min", () => {
    const res = callValidator({ value: "10" }, 100);
    expect(res).toEqual("MIN");
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
