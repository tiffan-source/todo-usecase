import type { Repository } from "common/repositories/repository.js";
import type { ILabel } from "todo-entity";

export type GetLabelByIdRepositoryInput = string;
export type GetLabelByIdRepositoryOutput = ILabel;

export interface GetLabelByIdRepository
  extends Repository<
    GetLabelByIdRepositoryInput,
    GetLabelByIdRepositoryOutput
  > {
  execute(input: GetLabelByIdRepositoryInput): GetLabelByIdRepositoryOutput;
}
