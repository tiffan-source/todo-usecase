import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { GetTodoByIdOutput } from "todo-retrieval/dtos/get-todo-by-id.dto.js";

export interface GetTodoByIdPresenter extends IPresenter<GetTodoByIdOutput> {
  present(output: outputDto<GetTodoByIdOutput>): void;
}
