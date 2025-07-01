export class ValidationError {
  private readonly rule: string;
  private readonly field: string;
  private readonly customMessage?: string;

  constructor(rule: string, field: string, customMessage?: string) {
    this.rule = rule;
    this.field = field;

    if (customMessage !== undefined && customMessage !== null) {
      this.customMessage = customMessage;
    }
  }

  toString(): string {
    if (this.customMessage !== undefined && this.customMessage !== null) {
      return this.customMessage;
    }

    return `Validation error on field '${this.field}': ${this.rule}`;
  }
}
