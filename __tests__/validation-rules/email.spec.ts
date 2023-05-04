import { email, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (accessor: ValueAccessor | string) => string | null = (
  accessor: ValueAccessor | string
) => {
  const validator: ValidatorFn = email();
  return validator(accessor);
};

describe("Email", () => {
  it("Should be valid when string is email", () => {
    const res = callValidator("john@example.org");
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor is email", () => {
    const res = callValidator({ value: "john@example.org" });
    expect(res).toBeNull();
  });

  it("Should be invalid when string is not an email", () => {
    const res = callValidator("FOO");
    expect(res).toEqual("EMAIL");
  });

  it("Should be invalid when valueAccessor is not an email", () => {
    const res = callValidator({ value: "FOO" });
    expect(res).toEqual("EMAIL");
  });

  it("Should be valid when string is empty", () => {
    const res = callValidator("");
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor is empty", () => {
    const res = callValidator({ value: "" });
    expect(res).toBeNull();
  });
});
