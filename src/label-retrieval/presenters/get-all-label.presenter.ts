import type { outputDto } from "../../common/dtos/outputDto.js";
import type { IPresenter } from "../../common/presenters/presenter.js";
import type { GetAllLabelOutput } from "../dtos/get-all-label.dto.js";

export interface IGetAllLabelPresenter extends IPresenter<GetAllLabelOutput> {
  present(output: outputDto<GetAllLabelOutput>): void;
}
