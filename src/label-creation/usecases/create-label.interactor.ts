import type { inputDto } from "../../common/dtos/inputDto.js";
import type { Interactor } from "../../common/usecases/interactor.js";
import type { CreateLabelInput } from "../dtos/create-label.dto.js";

export interface ICreateLabelInteractor extends Interactor<CreateLabelInput> {
  execute(input: inputDto<CreateLabelInput>): void;
}
