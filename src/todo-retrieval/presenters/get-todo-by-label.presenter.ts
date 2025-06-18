import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { GetTodoByLabelOutput } from "todo-retrieval/dtos/get-todo-by-label.dto.js";

export interface GetTodoByLabelPresenter
  extends IPresenter<GetTodoByLabelOutput> {
  present(output: outputDto<GetTodoByLabelOutput>): void;
}
