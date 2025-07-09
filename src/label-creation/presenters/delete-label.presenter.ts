import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { DeleteLabelOutput } from "../dtos/delete-label.dto.js";

export interface DeleteLabelPresenter<O = object>
  extends IPresenter<DeleteLabelOutput, O> {
  present(output: outputDto<DeleteLabelOutput>): void;
}
