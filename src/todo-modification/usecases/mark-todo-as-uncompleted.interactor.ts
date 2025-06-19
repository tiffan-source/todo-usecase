import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { MarkTodoAsUncompletedInput } from "todo-modification/dtos/mark-todo-as-uncompleted.dto.js";

export interface MarkTodoAsUncompletedInteractor
  extends Interactor<MarkTodoAsUncompletedInput> {
  execute(input: inputDto<MarkTodoAsUncompletedInput>): void;
}
