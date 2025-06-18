import type { inputDto } from "common/dtos/inputDto.js";
import type { ValidationError } from "./validation-error.js";

export interface IValidation {
  validate: (input: inputDto) => void;
  getErrors: () => ValidationError[];
  isValid: () => boolean;
}
