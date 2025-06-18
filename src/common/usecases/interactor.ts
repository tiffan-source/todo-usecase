import type { inputDto } from "common/dtos/inputDto.js";

export interface Interactor<I> {
  execute(inputDto: inputDto<I>): void;
}
