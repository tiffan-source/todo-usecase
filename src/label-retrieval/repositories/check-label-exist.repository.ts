import type { IRepository } from "../../common/repositories/repository.js";

export type CheckLabelExistRepositoryInput = string;
export type CheckLabelExistRepositoryOutput = boolean;

export interface ICheckLabelExistRepository extends IRepository {
  checkLabelExists(
    input: CheckLabelExistRepositoryInput,
  ): Promise<CheckLabelExistRepositoryOutput>;
}
