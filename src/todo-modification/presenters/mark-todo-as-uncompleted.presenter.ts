import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { MarkTodoAsUncompletedOutput } from "../dtos/mark-todo-as-uncompleted.dto.js";

export interface IMarkTodoAsUncompletedPresenter
  extends IPresenter<MarkTodoAsUncompletedOutput> {
  present(output: outputDto<MarkTodoAsUncompletedOutput>): void;
}
