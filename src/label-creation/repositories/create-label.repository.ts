import type { ILabel } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export type CreateLabelRepositoryInput = ILabel;
export type CreateLabelRepositoryOutput = ILabel;

export interface ICreateLabelRepository
  extends IRepository<CreateLabelRepositoryInput, CreateLabelRepositoryOutput> {
  execute(
    input: CreateLabelRepositoryInput,
  ): Promise<CreateLabelRepositoryOutput>;
}
