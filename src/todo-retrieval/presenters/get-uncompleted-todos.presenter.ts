import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { GetUncompletedTodosOutput } from "../dtos/get-uncompleted-todos.dto.js";

export interface IGetUncompletedTodosPresenter<O = object>
  extends IPresenter<GetUncompletedTodosOutput, O> {
  present(output: outputDto<GetUncompletedTodosOutput>): void;
}
