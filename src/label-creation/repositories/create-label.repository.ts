import type { IRepository } from "common/repositories/repository.js";
import type { ILabel } from "todo-entity";

export type CreateLabelRepositoryInput = ILabel;
export type CreateLabelRepositoryOutput = ILabel;
export interface CreateLabelRepository
  extends IRepository<CreateLabelRepositoryInput, CreateLabelRepositoryOutput> {
  execute(input: CreateLabelRepositoryInput): CreateLabelRepositoryOutput;
}
