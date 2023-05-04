import { forbidden, ValidatorFn, ValueAccessor } from "../../src/lib";

const callValidator: (
  accessor: ValueAccessor | string,
  criteria: string[]
) => string | null = (accessor: ValueAccessor | string, criteria: string[]) => {
  const validator: ValidatorFn = forbidden(criteria);
  return validator(accessor);
};

describe("Forbidden", () => {
  it("Should be valid when string is not forbidden", () => {
    const res = callValidator("FOO", ["BAR"]);
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor is not forbidden", () => {
    const res = callValidator({ value: "FOO" }, ["BAR"]);
    expect(res).toBeNull();
  });

  it("Should be invalid when string is forbidden", () => {
    const res = callValidator("FOO", ["FOO"]);
    expect(res).toEqual("FORBIDDEN");
  });

  it("Should be invalid when valueAccessor is forbidden", () => {
    const res = callValidator({ value: "FOO" }, ["FOO"]);
    expect(res).toEqual("FORBIDDEN");
  });

  it("Should be valid when string is empty", () => {
    const res = callValidator("", ["FOO"]);
    expect(res).toBeNull();
  });

  it("Should be valid when valueAccessor is empty", () => {
    const res = callValidator({ value: "" }, ["FOO"]);
    expect(res).toBeNull();
  });

  it("Should be valid when forbidden words are empty for string", () => {
    const res = callValidator("FOO", []);
    expect(res).toBeNull();
  });

  it("Should be valid when forbidden words are empty for valueAccessor", () => {
    const res = callValidator({ value: "FOO" }, []);
    expect(res).toBeNull();
  });
});
