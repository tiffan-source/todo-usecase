import type { inputDto } from "common/dtos/inputDto.js";

export interface Interactor<I> {
  execute(input: inputDto<I>): void;
}
