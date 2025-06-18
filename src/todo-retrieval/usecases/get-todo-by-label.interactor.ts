import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { GetTodoByLabelInput } from "todo-retrieval/dtos/get-todo-by-label.dto.js";

export interface GetTodoByLabelInteractor
  extends Interactor<GetTodoByLabelInput> {
  execute(input: inputDto<GetTodoByLabelInput>): void;
}
