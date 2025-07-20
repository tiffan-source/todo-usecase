import type { inputDto } from "../../common/dtos/inputDto.js";
import type { Interactor } from "../../common/usecases/interactor.js";
import type { EditTodoInput } from "../dtos/edit-todo.dto.js";

export interface IEditTodoInteractor extends Interactor<EditTodoInput> {
  execute(input: inputDto<EditTodoInput>): void;
}
