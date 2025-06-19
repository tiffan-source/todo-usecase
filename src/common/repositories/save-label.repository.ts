import type { ILabel } from "todo-entity";
import type { IRepository } from "./repository.js";

export type SaveLabelRepositoryInput = ILabel;
export type SaveLabelRepositoryOutput = ILabel;

export interface SaveLabelRepository
  extends IRepository<SaveLabelRepositoryInput, SaveLabelRepositoryOutput> {
  execute(input: SaveLabelRepositoryInput): SaveLabelRepositoryOutput;
}
