import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { RemoveLabelsFromTodoOutput } from "todo-label-management/dtos/remove-labels-from-todo.dto.js";

export interface RemoveLabelsFromTodoPresenter
  extends IPresenter<RemoveLabelsFromTodoOutput> {
  present(output: outputDto<RemoveLabelsFromTodoOutput>): void;
}
