import { required, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (accessor: ValueAccessor | string) => string | null = (
  accessor: ValueAccessor | string
) => {
  const validator: ValidatorFn = required();
  return validator(accessor);
};

describe("Required", () => {
  it("Should be valid when string exists", () => {
    const res = callValidator("FOO");
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor exists", () => {
    const res = callValidator({ value: "FOO" });
    expect(res).toBeNull();
  });

  it("Should be invalid when string is empty", () => {
    const res = callValidator("");
    expect(res).toEqual("REQUIRED");
  });

  it("Should be invalid when valueAccessor is empty", () => {
    const res = callValidator({ value: "" });
    expect(res).toEqual("REQUIRED");
  });
});
