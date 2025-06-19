import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { UpdateLabelNameInput } from "label-modification/dtos/update-label-name.dto.js";

export interface UpdateLabelNameInteractor
  extends Interactor<UpdateLabelNameInput> {
  execute(input: inputDto<UpdateLabelNameInput>): void;
}
