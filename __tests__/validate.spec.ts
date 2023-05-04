import { minLength, required, validate, ValidationResult } from "../src/lib";

describe("Validate", () => {
  it("Should validate without rules", () => {
    const accessor: string = "SUT";

    const res: ValidationResult = validate(accessor, []);

    expect(res.valid).toBeTruthy();
    expect(res.messages).toHaveLength(0);
  });

  it("Should validate with 1 rule", () => {
    const accessor: string = "SUT";

    const res: ValidationResult = validate(accessor, [required()]);

    expect(res.valid).toBeTruthy();
    expect(res.messages).toHaveLength(0);
  });

  it("Should map validation message", () => {
    const accessor: string = "SUT";

    const res: ValidationResult = validate(accessor, [minLength(100)]);

    expect(res.valid).toBeFalsy();
    expect(res.messages).toHaveLength(1);
    expect(res.messages[0]).toEqual("MIN_LENGTH");
  });
});
