import { startsWith, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (
  accessor: ValueAccessor | string,
  criteria: string
) => string | null = (accessor: ValueAccessor | string, criteria: string) => {
  const validator: ValidatorFn = startsWith(criteria);
  return validator(accessor);
};

describe("StarsWith", () => {
  it("Should be valid when string starts with criteria", () => {
    const res = callValidator("FOO", "F");
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor starts with criteria", () => {
    const res = callValidator({ value: "FOO" }, "F");
    expect(res).toBeNull();
  });

  it("Should be invalid when string does not start with criteria", () => {
    const res = callValidator("FOO", "B");
    expect(res).toEqual("STARTS_WITH");
  });

  it("Should be invalid when valueAccessor does not start with criteria", () => {
    const res = callValidator({ value: "FOO" }, "B");
    expect(res).toEqual("STARTS_WITH");
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
