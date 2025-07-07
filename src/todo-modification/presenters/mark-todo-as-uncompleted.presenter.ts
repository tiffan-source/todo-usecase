import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { MarkTodoAsUncompletedOutput } from "../dtos/mark-todo-as-uncompleted.dto.js";

export type MarkTodoAsUncompletedCallbackOutput = {
  success: boolean;
  errorMessage: string;
  todo: {
    id: string;
    title: string;
    description?: string;
    dueDate?: Date;
    doneDate?: Date;
    labels?: Array<{ id: string; name: string; color: string | null }>;
  };
};

export interface IMarkTodoAsUncompletedPresenter
  extends IPresenter<
    MarkTodoAsUncompletedOutput,
    MarkTodoAsUncompletedCallbackOutput
  > {
  present(output: outputDto<MarkTodoAsUncompletedOutput>): void;
}
