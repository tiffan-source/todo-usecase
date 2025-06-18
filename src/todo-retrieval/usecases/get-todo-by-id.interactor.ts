import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { GetTodoByIdInput } from "todo-retrieval/dtos/get-todo-by-id.dto.js";

export interface GetTodoByIdInteractor extends Interactor<GetTodoByIdInput> {
  execute(input: inputDto<GetTodoByIdInput>): void;
}
