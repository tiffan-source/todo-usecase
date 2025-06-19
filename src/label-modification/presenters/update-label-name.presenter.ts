import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { UpdateLabelNameOutput } from "label-modification/dtos/update-label-name.dto.js";

export interface UpdateLabelNamePresenter
  extends IPresenter<UpdateLabelNameOutput> {
  present(output: outputDto<UpdateLabelNameOutput>): void;
}
