import type { inputDto } from "../../common/dtos/inputDto.js";
import type { IValidation } from "../../common/validations/validation.js";
import type { MarkTodoAsUncompletedInput } from "../dtos/mark-todo-as-uncompleted.dto.js";

export interface IMarkTodoAsUncompletedValidation
  extends IValidation<MarkTodoAsUncompletedInput> {
  validate(input: inputDto<MarkTodoAsUncompletedInput>): void;
}
