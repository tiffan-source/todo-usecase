import type { ILabel } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export type DeleteLabelRepositoryInput = ILabel;
export type DeleteLabelRepositoryOutput = boolean;

export interface IDeleteLabelRepository
  extends IRepository<DeleteLabelRepositoryInput, DeleteLabelRepositoryOutput> {
  execute(
    input: DeleteLabelRepositoryInput,
  ): Promise<DeleteLabelRepositoryOutput>;
}
