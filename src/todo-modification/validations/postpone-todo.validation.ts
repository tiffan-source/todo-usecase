import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { PostponeTodoInput } from "todo-modification/dtos/postpone-todo.dto.js";

export interface PostponeTodoValidation extends IValidation<PostponeTodoInput> {
  validate(input: inputDto<PostponeTodoInput>): void;
}
