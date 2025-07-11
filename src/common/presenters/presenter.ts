import type { outputDto } from "../dtos/outputDto.js";

export interface IPresenter<I, O = object> {
  // The presenter interface defines the contract for presenting output data.
  // It should be implemented by classes that handle the presentation logic.

  present(output: outputDto<I>): void; // Method to present the output data

  setCallback(callback: (output: O) => void): void; // Method to set a callback function
}
