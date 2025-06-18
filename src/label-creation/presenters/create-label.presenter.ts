import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { CreateLabelOutput } from "label-creation/dtos/create-label.dto.js";

export interface CreateLabelPresenter extends IPresenter<CreateLabelOutput> {
  present(output: outputDto<CreateLabelOutput>): void;
}
