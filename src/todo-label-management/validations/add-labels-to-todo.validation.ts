import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { AddLabelsToTodoInput } from "todo-label-management/dtos/add-labels-to-todo.dto.js";

export interface AddLabelsToTodoValidation
  extends IValidation<AddLabelsToTodoInput> {
  validate(input: inputDto<AddLabelsToTodoInput>): void;
}
