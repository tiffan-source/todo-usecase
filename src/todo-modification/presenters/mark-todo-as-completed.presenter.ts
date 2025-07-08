import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { MarkTodoAsCompletedOutput } from "../dtos/mark-todo-as-completed.dto.js";

export interface IMarkTodoAsCompletedPresenter<O = object>
  extends IPresenter<MarkTodoAsCompletedOutput, O> {
  present(output: outputDto<MarkTodoAsCompletedOutput>): void;
}
