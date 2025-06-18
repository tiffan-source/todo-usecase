import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { GetTodoByIdInput } from "todo-retrieval/dtos/get-todo-by-id.dto.js";

export interface GetTodoByIdValidation extends IValidation<GetTodoByIdInput> {
  validate(input: inputDto<GetTodoByIdInput>): void;
}
