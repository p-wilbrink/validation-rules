import { regex, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (
  accessor: ValueAccessor | string,
  criteria: string | RegExp
) => string | null = (
  accessor: ValueAccessor | string,
  criteria: string | RegExp
) => {
  const validator: ValidatorFn = regex(criteria);
  return validator(accessor);
};

describe("Regex", () => {
  it("Should be valid when string follows regex string", () => {
    const res = callValidator("FOO", "[A-Z]");
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor follows regex string", () => {
    const res = callValidator({ value: "FOO" }, "[A-Z]");
    expect(res).toBeNull();
  });

  it("Should be valid when string follows regex", () => {
    const res = callValidator("FOO", new RegExp("[A-Z]"));
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor follows regex", () => {
    const res = callValidator({ value: "FOO" }, new RegExp("[A-Z]"));
    expect(res).toBeNull();
  });

  it("Should be invalid when string does not follow regex string", () => {
    const res = callValidator("FOO", "[a-z]");
    expect(res).toEqual("REGEXP");
  });

  it("Should be invalid when valueAccessor does not follow regex string", () => {
    const res = callValidator({ value: "FOO" }, "[a-z]");
    expect(res).toEqual("REGEXP");
  });

  it("Should be invalid when string does not follow regex", () => {
    const res = callValidator("FOO", new RegExp("[a-z]"));
    expect(res).toEqual("REGEXP");
  });

  it("Should be invalid when valueAccessor does not follow regex", () => {
    const res = callValidator({ value: "FOO" }, new RegExp("[a-z]"));
    expect(res).toEqual("REGEXP");
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
