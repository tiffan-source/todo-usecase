import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { GetAllTodoOutput } from "../dtos/get-all-todo.dto.js";

export type GetAllTodoCallbackOutput = {
  success: boolean;
  errorMessage: string;
  todos: Array<{
    id: string;
    title: string;
    description?: string;
    dueDate?: Date;
    doneDate?: Date;
    labels?: Array<{ id: string; name: string; color: string | null }>;
  }>;
};

export interface IGetAllTodoPresenter
  extends IPresenter<GetAllTodoOutput, GetAllTodoCallbackOutput> {
  present(output: outputDto<GetAllTodoOutput>): void;
}
