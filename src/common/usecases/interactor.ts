import type { inputDto } from "common/dtos/inputDto.js";

export interface Interactor {
  execute(inputDto: inputDto): void;
}
