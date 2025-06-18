import type { outputDto } from "common/dtos/outputDto.js";

export interface IPresenter {
  // The presenter interface defines the contract for presenting output data.
  // It should be implemented by classes that handle the presentation logic.

  present(output: outputDto): void; // Method to present the output data
}
