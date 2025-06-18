import type { inputDto } from "common/dtos/inputDto.js";
import type { Interactor } from "common/usecases/interactor.js";

export interface GetUncompletedTodosInteractor extends Interactor<void> {
  execute(input: inputDto<void>): void;
}
