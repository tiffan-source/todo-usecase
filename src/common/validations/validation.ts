import type { inputDto } from "../dtos/inputDto.js";
import type { ValidationError } from "./validation-error.js";

export interface IValidation<I> {
  validate: (input: inputDto<I>) => void;
  getErrors: () => ValidationError[];
  isValid: () => boolean;
}
