import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { MarkTodoAsCompletedInput } from "todo-modification/dtos/mark-todo-as-completed.dto.js";

export interface MarkTodoAsCompletedInteractor
  extends Interactor<MarkTodoAsCompletedInput> {
  execute(input: inputDto<MarkTodoAsCompletedInput>): void;
}
