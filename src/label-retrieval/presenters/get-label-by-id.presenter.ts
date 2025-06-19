import type { outputDto } from "common/dtos/outputDto.js";
import type { IPresenter } from "common/presenters/presenter.js";
import type { GetLabelByIdOutput } from "label-retrieval/dtos/get-label-by-id.dto.js";

export interface GetLabelByIdPresenter extends IPresenter<GetLabelByIdOutput> {
  present(output: outputDto<GetLabelByIdOutput>): void;
}
