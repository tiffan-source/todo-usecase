import type { Repository } from "common/repositories/repository.js";
import type { ILabel } from "todo-entity";

export type GetAllLabelRepositoryOutput = Array<ILabel>;

export interface GetAllLabelRepository
  extends Repository<void, GetAllLabelRepositoryOutput> {
  execute(): GetAllLabelRepositoryOutput;
}
