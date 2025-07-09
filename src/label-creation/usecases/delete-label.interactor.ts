import type { inputDto } from "../../common/dtos/inputDto.js";
import type { Interactor } from "../../common/usecases/interactor.js";
import type { DeleteLabelInput } from "../dtos/delete-label.dto.js";

export interface IDeleteLabelInteractor extends Interactor<DeleteLabelInput> {
  execute(input: inputDto<DeleteLabelInput>): void;
}
