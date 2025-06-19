import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { DeleteTodoInput } from "todo-creation/dtos/delete-todo.dto.js";

export interface IDeleteTodoValidation extends IValidation<DeleteTodoInput> {
  validate(input: inputDto<DeleteTodoInput>): void;
}
