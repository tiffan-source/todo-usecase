import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { UpdateLabelColorOutput } from "label-modification/dtos/update-label-color.dto.js";

export interface UpdateLabelColorPresenter
  extends IPresenter<UpdateLabelColorOutput> {
  present(output: outputDto<UpdateLabelColorOutput>): void;
}
