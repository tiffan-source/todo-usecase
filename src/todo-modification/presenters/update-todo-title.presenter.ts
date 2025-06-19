import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { UpdateTodoTitleOutput } from "todo-modification/dtos/update-todo-title.dto.js";

export interface UpdateTodoTitlePresenter
  extends IPresenter<UpdateTodoTitleOutput> {
  present(output: outputDto<UpdateTodoTitleOutput>): void;
}
