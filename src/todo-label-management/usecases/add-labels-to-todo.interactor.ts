import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { AddLabelsToTodoInput } from "todo-label-management/dtos/add-labels-to-todo.dto.js";

export interface AddLabelsToTodoInteractor
  extends Interactor<AddLabelsToTodoInput> {
  execute(input: inputDto<AddLabelsToTodoInput>): void;
}
