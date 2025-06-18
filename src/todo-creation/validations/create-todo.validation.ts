import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { CreateTodoInput } from "todo-creation/dtos/create-todo.dto.js";

export interface CreateTodoValidation extends IValidation<CreateTodoInput> {
  validate(input: inputDto<CreateTodoInput>): void;
}
