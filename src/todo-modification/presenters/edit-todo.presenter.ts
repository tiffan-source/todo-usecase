import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { EditTodoOutput } from "../dtos/edit-todo.dto.js";

export interface IEditTodoPresenter extends IPresenter<EditTodoOutput> {
  present(output: outputDto<EditTodoOutput>): void;
}
