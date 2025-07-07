import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { DeleteTodoOutput } from "../dtos/delete-todo.dto.js";

export type DeleteTodoCallbackOutput = {
  success: boolean;
  errorMessage: string;
};
export interface IDeleteTodoPresenter
  extends IPresenter<DeleteTodoOutput, DeleteTodoCallbackOutput> {
  present(output: outputDto<DeleteTodoOutput>): void;
}
