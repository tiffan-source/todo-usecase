import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { MarkTodoAsUncompletedOutput } from "todo-modification/dtos/mark-todo-as-uncompleted.dto.js";

export interface MarkTodoAsUncompletedPresenter
  extends IPresenter<MarkTodoAsUncompletedOutput> {
  present(output: outputDto<MarkTodoAsUncompletedOutput>): void;
}
