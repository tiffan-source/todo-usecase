import type { IRepository } from "../../common/repositories/repository.js";

export type CheckLabelExistRepositoryInput = string;
export type CheckLabelExistRepositoryOutput = boolean;

export interface ICheckLabelExistRepository
  extends IRepository<
    CheckLabelExistRepositoryInput,
    CheckLabelExistRepositoryOutput
  > {
  execute(
    input: CheckLabelExistRepositoryInput,
  ): Promise<CheckLabelExistRepositoryOutput>;
}
