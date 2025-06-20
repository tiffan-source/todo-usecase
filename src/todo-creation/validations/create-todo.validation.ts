import type { inputDto } from "../../common/dtos/inputDto.js";
import type { IValidation } from "../../common/validations/validation.js";
import type { CreateTodoInput } from "../dtos/create-todo.dto.js";

export interface ICreateTodoValidation extends IValidation<CreateTodoInput> {
  validate(input: inputDto<CreateTodoInput>): void;
}
