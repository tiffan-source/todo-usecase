import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { MarkTodoAsCompletedOutput } from "../dtos/mark-todo-as-completed.dto.js";

export type MarkTodoAsCompletedCallbackOutput = {
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

export interface IMarkTodoAsCompletedPresenter
  extends IPresenter<
    MarkTodoAsCompletedOutput,
    MarkTodoAsCompletedCallbackOutput
  > {
  present(output: outputDto<MarkTodoAsCompletedOutput>): void;
}
