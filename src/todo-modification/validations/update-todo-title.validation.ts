import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { UpdateTodoTitleInput } from "todo-modification/dtos/update-todo-title.dto.js";

export interface UpdateTodoTitleValidation
  extends IValidation<UpdateTodoTitleInput> {
  validate(input: inputDto<UpdateTodoTitleInput>): void;
}
