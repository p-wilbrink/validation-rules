import { match, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (
  accessor: ValueAccessor | string,
  other: ValueAccessor | string
) => string | null = (
  accessor: ValueAccessor | string,
  other: ValueAccessor | string
) => {
  const validator: ValidatorFn = match(other);
  return validator(accessor);
};

describe("Match", () => {
  it("Should be valid when string matches other string", () => {
    const res = callValidator("FOO", "FOO");
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor matches other string", () => {
    const res = callValidator({ value: "FOO" }, "FOO");
    expect(res).toBeNull();
  });

  it("Should be valid when string matches other valueAccessor", () => {
    const res = callValidator("FOO", { value: "FOO" });
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor matches other valueAccessor", () => {
    const res = callValidator({ value: "FOO" }, { value: "FOO" });
    expect(res).toBeNull();
  });

  it("Should be invalid when string does not match other string", () => {
    const res = callValidator("FOO", "BAR");
    expect(res).toEqual("MATCH");
  });

  it("Should be invalid when valueAccessor is does not match other string", () => {
    const res = callValidator({ value: "FOO" }, "BAR");
    expect(res).toEqual("MATCH");
  });

  it("Should be invalid when string does not match other valueAccessor", () => {
    const res = callValidator("FOO", { value: "BAR" });
    expect(res).toEqual("MATCH");
  });

  it("Should be invalid when valueAccessor is does not match other valueAccessor", () => {
    const res = callValidator({ value: "FOO" }, { value: "BAR" });
    expect(res).toEqual("MATCH");
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
