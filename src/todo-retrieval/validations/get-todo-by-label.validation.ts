import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { GetTodoByLabelInput } from "todo-retrieval/dtos/get-todo-by-label.dto.js";

export interface GetTodoByLabelValidation
  extends IValidation<GetTodoByLabelInput> {
  validate(input: inputDto<GetTodoByLabelInput>): void;
}
