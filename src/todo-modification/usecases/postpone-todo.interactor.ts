import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { PostponeTodoInput } from "todo-modification/dtos/postpone-todo.dto.js";

export interface PostponeTodoInteractor extends Interactor<PostponeTodoInput> {
  execute(input: inputDto<PostponeTodoInput>): void;
}
