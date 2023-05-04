import { contains, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (
  accessor: ValueAccessor | string,
  criteria: string
) => string | null = (accessor: ValueAccessor | string, criteria: string) => {
  const validator: ValidatorFn = contains(criteria);
  return validator(accessor);
};

describe("Contains", () => {
  it("Should be valid when string contains criteria", () => {
    const res = callValidator("FOO", "F");
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor contains criteria", () => {
    const res = callValidator({ value: "FOO" }, "F");
    expect(res).toBeNull();
  });

  it("Should be invalid when string does not contain criteria", () => {
    const res = callValidator("FOO", "B");
    expect(res).toEqual("CONTAINS");
  });

  it("Should be invalid when valueAccessor does not contain criteria", () => {
    const res = callValidator({ value: "FOO" }, "B");
    expect(res).toEqual("CONTAINS");
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
