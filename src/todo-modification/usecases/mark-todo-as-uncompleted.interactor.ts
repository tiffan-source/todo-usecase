import type { inputDto } from "../../common/dtos/inputDto.js";
import type { Interactor } from "../../common/usecases/interactor.js";
import type { MarkTodoAsUncompletedInput } from "../dtos/mark-todo-as-uncompleted.dto.js";

export interface IMarkTodoAsUncompletedInteractor
  extends Interactor<MarkTodoAsUncompletedInput> {
  execute(input: inputDto<MarkTodoAsUncompletedInput>): void;
}
