import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { UpdateLabelColorInput } from "label-modification/dtos/update-label-color.dto.js";

export interface UpdateLabelColorInteractor
  extends Interactor<UpdateLabelColorInput> {
  execute(input: inputDto<UpdateLabelColorInput>): void;
}
