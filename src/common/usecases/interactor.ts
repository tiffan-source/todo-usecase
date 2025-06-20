import type { inputDto } from "../dtos/inputDto.js";

export interface Interactor<I> {
  execute(input: inputDto<I>): void;
}
