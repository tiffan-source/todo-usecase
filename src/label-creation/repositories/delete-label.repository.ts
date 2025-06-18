import type { Repository } from "common/repositories/repository.js";
import type { ILabel } from "todo-entity";

export type DeleteLabelRepositoryInput = ILabel;
export type DeleteLabelRepositoryOutput = boolean;

export interface DeleteLabelRepository
  extends Repository<DeleteLabelRepositoryInput, DeleteLabelRepositoryOutput> {
  execute(input: DeleteLabelRepositoryInput): DeleteLabelRepositoryOutput;
}
