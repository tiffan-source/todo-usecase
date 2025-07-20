import type { inputDto } from "../../common/dtos/inputDto.js";
import type { IValidation } from "../../common/validations/validation.js";
import type { EditTodoInput } from "../dtos/edit-todo.dto.js";

export interface IEditTodoValidation extends IValidation<EditTodoInput> {
  validate(input: inputDto<EditTodoInput>): void;
}
