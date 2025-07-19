import type { inputDto } from "../../common/dtos/inputDto.js";
import type { IValidation } from "../../common/validations/validation.js";
import type { GetAllTodoInput } from "../dtos/get-all-todo.dto.js";

export interface IGetAllTodoValidation extends IValidation<GetAllTodoInput> {
  validate(input: inputDto<GetAllTodoInput>): void;
}
