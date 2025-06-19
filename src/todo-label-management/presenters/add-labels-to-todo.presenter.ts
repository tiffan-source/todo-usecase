import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { AddLabelsToTodoOutput } from "todo-label-management/dtos/add-labels-to-todo.dto.js";

export interface AddLabelsToTodoPresenter
  extends IPresenter<AddLabelsToTodoOutput> {
  present(output: outputDto<AddLabelsToTodoOutput>): void;
}
