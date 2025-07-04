import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { CreateTodoOutput } from "../dtos/create-todo.dto.js";

export interface ICreateTodoPresenter extends IPresenter<CreateTodoOutput> {
  present(output: outputDto<CreateTodoOutput>): void;
}
