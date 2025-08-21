import type { ILabel } from "todo-entity";
import type { IRepository } from "./repository.js";

export type SaveLabelRepositoryInput = ILabel;
export type SaveLabelRepositoryOutput = ILabel;

export interface ISaveLabelRepository extends IRepository {
  saveLabel(
    input: SaveLabelRepositoryInput,
  ): Promise<SaveLabelRepositoryOutput>;
}
