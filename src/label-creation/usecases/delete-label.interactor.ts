import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { DeleteLabelInput } from "label-creation/dtos/delete-label.dto.js";

export interface DeleteLabelInteractor extends Interactor<DeleteLabelInput> {
  execute(input: inputDto<DeleteLabelInput>): void;
}
