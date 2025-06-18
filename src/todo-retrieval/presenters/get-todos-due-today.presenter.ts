import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { GetTodosDueTodayOutput } from "todo-retrieval/dtos/get-todos-due-today.dto.js";

export interface GetTodosDueTodayPresenter
  extends IPresenter<GetTodosDueTodayOutput> {
  present(output: outputDto<GetTodosDueTodayOutput>): void;
}
