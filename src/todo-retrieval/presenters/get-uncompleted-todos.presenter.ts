import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { GetUncompletedTodosOutput } from "todo-retrieval/dtos/get-uncompleted-todos.dto.js";

export interface GetUncompletedTodosPresenter
  extends IPresenter<GetUncompletedTodosOutput> {
  present(output: outputDto<GetUncompletedTodosOutput>): void;
}
