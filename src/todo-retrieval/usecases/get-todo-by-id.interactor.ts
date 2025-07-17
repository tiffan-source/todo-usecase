import type { inputDto } from "../../common/dtos/inputDto.js";
import type { Interactor } from "../../common/usecases/interactor.js";
import type { GetTodoByIdInput } from "../dtos/get-todo-by-id.dto.js";

export interface IGetTodoByIdInteractor extends Interactor<GetTodoByIdInput> {
  execute(input: inputDto<GetTodoByIdInput>): void;
}
