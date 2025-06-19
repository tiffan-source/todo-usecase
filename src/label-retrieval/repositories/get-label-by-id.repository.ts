import type { IRepository } from "common/repositories/repository.js";
import type { ILabel } from "todo-entity";

export type GetLabelByIdRepositoryInput = string;
export type GetLabelByIdRepositoryOutput = ILabel;

export interface GetLabelByIdRepository
  extends IRepository<
    GetLabelByIdRepositoryInput,
    GetLabelByIdRepositoryOutput
  > {
  execute(input: GetLabelByIdRepositoryInput): GetLabelByIdRepositoryOutput;
}
