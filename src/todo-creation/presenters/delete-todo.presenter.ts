import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { DeleteTodoOutput } from "todo-creation/dtos/delete-todo.dto.js";

export interface DeleteTodoPresenter extends IPresenter<DeleteTodoOutput> {
  present: (output: outputDto<DeleteTodoOutput>) => void;
}
