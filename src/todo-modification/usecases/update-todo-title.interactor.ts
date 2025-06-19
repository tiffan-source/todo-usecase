import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { UpdateTodoTitleInput } from "todo-modification/dtos/update-todo-title.dto.js";

export interface UpdateTodoTitleInteractor
  extends Interactor<UpdateTodoTitleInput> {
  execute(input: inputDto<UpdateTodoTitleInput>): void;
}
