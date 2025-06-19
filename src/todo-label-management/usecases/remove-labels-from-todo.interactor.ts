import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { RemoveLabelsFromTodoInput } from "todo-label-management/dtos/remove-labels-from-todo.dto.js";

export interface RemoveLabelsFromTodoInteractor
  extends Interactor<RemoveLabelsFromTodoInput> {
  execute(input: inputDto<RemoveLabelsFromTodoInput>): void;
}
