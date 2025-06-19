import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";
import type { GetLabelByIdInput } from "label-retrieval/dtos/get-label-by-id.dto.js";

export interface GetLabelByIdInteractor extends Interactor<GetLabelByIdInput> {
  execute(input: inputDto<GetLabelByIdInput>): void;
}
