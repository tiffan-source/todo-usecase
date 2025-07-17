import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { DeleteLabelOutput } from "../dtos/delete-label.dto.js";

export interface IDeleteLabelPresenter extends IPresenter<DeleteLabelOutput> {
  present(output: outputDto<DeleteLabelOutput>): void;
}
