import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { CreateTodoOutput } from "../dtos/create-todo.dto.js";

export type CreateTodoCallbackOutput = {
  success: boolean;
  errorMessage: string;
};
export interface ICreateTodoPresenter
  extends IPresenter<CreateTodoOutput, CreateTodoCallbackOutput> {
  present(output: outputDto<CreateTodoOutput>): void;
}
