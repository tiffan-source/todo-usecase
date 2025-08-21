import type { IRepository } from "../../common/repositories/repository.js";

export type DeleteLabelRepositoryInput = string;
export type DeleteLabelRepositoryOutput = boolean;

export interface IDeleteLabelRepository extends IRepository {
  deleteLabel(
    input: DeleteLabelRepositoryInput,
  ): Promise<DeleteLabelRepositoryOutput>;
}
