import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { MarkTodoAsCompletedOutput } from "todo-modification/dtos/mark-todo-as-completed.dto.js";

export interface MarkTodoAsCompletedPresenter
  extends IPresenter<MarkTodoAsCompletedOutput> {
  present(output: outputDto<MarkTodoAsCompletedOutput>): void;
}
