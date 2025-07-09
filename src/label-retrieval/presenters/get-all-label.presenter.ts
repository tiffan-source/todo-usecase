import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { GetAllLabelOutput } from "../dtos/get-all-label.dto.js";

export interface IGetAllLabelPresenter<O = object>
  extends IPresenter<GetAllLabelOutput, O> {
  present(output: outputDto<GetAllLabelOutput>): void;
}
