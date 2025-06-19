import type { IRepository } from "common/repositories/repository.js";
import type { ILabel } from "todo-entity";

export type DeleteLabelRepositoryInput = ILabel;
export type DeleteLabelRepositoryOutput = boolean;

export interface DeleteLabelRepository
  extends IRepository<DeleteLabelRepositoryInput, DeleteLabelRepositoryOutput> {
  execute(input: DeleteLabelRepositoryInput): DeleteLabelRepositoryOutput;
}
