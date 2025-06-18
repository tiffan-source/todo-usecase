import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { CreateTodoOutput } from "todo-creation/dtos/create-todo.dto.js";

export interface CreateTododPresenter extends IPresenter<CreateTodoOutput> {
  present(output: outputDto<CreateTodoOutput>): void; // Method to present the output data
}
