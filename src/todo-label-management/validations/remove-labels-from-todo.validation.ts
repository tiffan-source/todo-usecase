import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { RemoveLabelsFromTodoInput } from "todo-label-management/dtos/remove-labels-from-todo.dto.js";

export interface RemoveLabelsFromTodoValidation
  extends IValidation<RemoveLabelsFromTodoInput> {
  validate(input: inputDto<RemoveLabelsFromTodoInput>): void;
}
