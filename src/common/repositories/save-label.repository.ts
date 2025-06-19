import type { ILabel } from "todo-entity";
import type { Repository } from "./repository.js";

export type SaveLabelRepositoryInput = ILabel;
export type SaveLabelRepositoryOutput = ILabel;

export interface SaveLabelRepository
  extends Repository<SaveLabelRepositoryInput, SaveLabelRepositoryOutput> {
  execute(input: SaveLabelRepositoryInput): SaveLabelRepositoryOutput;
}
