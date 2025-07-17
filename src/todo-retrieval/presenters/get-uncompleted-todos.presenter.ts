import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { GetUncompletedTodosOutput } from "../dtos/get-uncompleted-todos.dto.js";

export interface IGetUncompletedTodosPresenter
  extends IPresenter<GetUncompletedTodosOutput> {
  present(output: outputDto<GetUncompletedTodosOutput>): void;
}
