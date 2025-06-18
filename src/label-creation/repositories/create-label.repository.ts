import type { Repository } from "common/repositories/repository.js";
import type { ILabel } from "todo-entity";

export type CreateLabelRepositoryInput = ILabel;
export type CreateLabelRepositoryOutput = ILabel;
export interface CreateLabelRepository
  extends Repository<CreateLabelRepositoryInput, CreateLabelRepositoryOutput> {
  execute(input: CreateLabelRepositoryInput): CreateLabelRepositoryOutput;
}
