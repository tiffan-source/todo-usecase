import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { CreateTodoInput } from "todo-creation/dtos/create-todo.dto.js";

export interface CreateTodoInteractor extends Interactor<CreateTodoInput> {
  execute(inputDto: inputDto<CreateTodoInput>): void;
}
