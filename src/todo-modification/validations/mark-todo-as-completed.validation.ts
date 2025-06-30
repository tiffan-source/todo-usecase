import type { inputDto } from "../../common/dtos/inputDto.js";
import type { IValidation } from "../../common/validations/validation.js";
import type { MarkTodoAsCompletedInput } from "../dtos/mark-todo-as-completed.dto.js";

export interface IMarkTodoAsCompletedValidation
  extends IValidation<MarkTodoAsCompletedInput> {
  validate(input: inputDto<MarkTodoAsCompletedInput>): void;
}
