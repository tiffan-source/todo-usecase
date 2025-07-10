import type { IRepository } from "../../common/repositories/repository.js";

export type DeleteLabelRepositoryInput = string;
export type DeleteLabelRepositoryOutput = boolean;

export interface IDeleteLabelRepository
  extends IRepository<DeleteLabelRepositoryInput, DeleteLabelRepositoryOutput> {
  execute(
    input: DeleteLabelRepositoryInput,
  ): Promise<DeleteLabelRepositoryOutput>;
}
