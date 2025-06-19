import type { IRepository } from "common/repositories/repository.js";
import type { ILabel } from "todo-entity";

export type GetAllLabelRepositoryOutput = Array<ILabel>;

export interface GetAllLabelRepository
  extends IRepository<void, GetAllLabelRepositoryOutput> {
  execute(): GetAllLabelRepositoryOutput;
}
