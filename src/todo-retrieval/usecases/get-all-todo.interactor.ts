import type { inputDto } from "../../common/dtos/inputDto.js";
import type { Interactor } from "../../common/usecases/interactor.js";
import type { GetAllTodoInput } from "../dtos/get-all-todo.dto.js";

export interface IGetAllTodoInteractor extends Interactor<GetAllTodoInput> {
  execute(input: inputDto<GetAllTodoInput>): void;
}
