import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { CreateLabelInput } from "label-creation/dtos/create-label.dto.js";

export interface CreateLabelInteractor extends Interactor<CreateLabelInput> {
  execute(input: inputDto<CreateLabelInput>): void;
}
