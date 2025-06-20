import type { inputDto } from "../../common/dtos/inputDto.js";
import type { Interactor } from "../../common/usecases/interactor.js";
import type { CreateTodoInput } from "../dtos/create-todo.dto.js";

export interface ICreateTodoInteractor extends Interactor<CreateTodoInput> {
  execute(input: inputDto<CreateTodoInput>): void;
}
