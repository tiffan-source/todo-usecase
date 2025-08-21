import type { ILabel } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export type GetLabelByIdRepositoryInput = string;
export type GetLabelByIdRepositoryOutput = ILabel | null;

export interface IGetLabelByIdRepository extends IRepository {
  getLabelById(
    id: GetLabelByIdRepositoryInput,
  ): Promise<GetLabelByIdRepositoryOutput>;
}
