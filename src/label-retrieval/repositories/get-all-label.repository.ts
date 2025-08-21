import type { ILabel } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export type GetAllLabelRepositoryOutput = Array<ILabel>;

export interface IGetAllLabelRepository extends IRepository {
  getAllLabels(): Promise<GetAllLabelRepositoryOutput>;
}
