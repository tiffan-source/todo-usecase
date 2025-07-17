import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { GetAllTodoOutput } from "../dtos/get-all-todo.dto.js";

export interface IGetAllTodoPresenter extends IPresenter<GetAllTodoOutput> {
  present(output: outputDto<GetAllTodoOutput>): void;
}
