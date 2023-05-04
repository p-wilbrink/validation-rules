import { endsWith, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (
  accessor: ValueAccessor | string,
  criteria: string
) => string | null = (accessor: ValueAccessor | string, criteria: string) => {
  const validator: ValidatorFn = endsWith(criteria);
  return validator(accessor);
};

describe("EndsWith", () => {
  it("Should be valid when string ends with criteria", () => {
    const res = callValidator("FOO", "O");
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor ends with criteria", () => {
    const res = callValidator({ value: "FOO" }, "O");
    expect(res).toBeNull();
  });

  it("Should be invalid when string does not end with criteria", () => {
    const res = callValidator("FOO", "B");
    expect(res).toEqual("ENDS_WITH");
  });

  it("Should be invalid when valueAccessor does not end with criteria", () => {
    const res = callValidator({ value: "FOO" }, "B");
    expect(res).toEqual("ENDS_WITH");
  });

  it("Should be valid when string is empty", () => {
    const res = callValidator("", "FOO");
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor is empty", () => {
    const res = callValidator({ value: "" }, "FOO");
    expect(res).toBeNull();
  });
});
