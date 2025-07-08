import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { DeleteTodoOutput } from "../dtos/delete-todo.dto.js";

export interface IDeleteTodoPresenter<O = object>
  extends IPresenter<DeleteTodoOutput, O> {
  present(output: outputDto<DeleteTodoOutput>): void;
}
