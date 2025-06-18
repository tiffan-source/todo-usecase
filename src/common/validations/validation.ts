import type { inputDto } from "common/dtos/inputDto.js";
import type { ValidationError } from "./validation-error.js";

export interface IValidation<I> {
  validate: (input: inputDto<I>) => void;
  getErrors: () => ValidationError[];
  isValid: () => boolean;
}
