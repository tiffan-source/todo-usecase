import type { IRepository } from "../../common/repositories/repository.js";

type CheckLabelExistRepositoryInput = string;
type CheckLabelExistRepositoryOutput = boolean;

export interface ICheckLabelExistRepository
  extends IRepository<
    CheckLabelExistRepositoryInput,
    CheckLabelExistRepositoryOutput
  > {
  execute(
    input: CheckLabelExistRepositoryInput,
  ): Promise<CheckLabelExistRepositoryOutput>;
}
