import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { DeleteTodoInput } from "todo-creation/dtos/delete-todo.dto.js";

export interface DeleteTodoInteractor extends Interactor<DeleteTodoInput> {
  execute(inputDto: inputDto<DeleteTodoInput>): void;
}
