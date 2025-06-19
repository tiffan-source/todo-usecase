import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { PostponeTodoOutput } from "todo-modification/dtos/postpone-todo.dto.js";

export interface PostponeTodoPresenter extends IPresenter<PostponeTodoOutput> {
  present(output: outputDto<PostponeTodoOutput>): void;
}
