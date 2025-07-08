import type { ITodo } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export type GetUncompletedTodosRepositoryOutput = Array<ITodo>;

export interface GetUncompletedTodosRepository
  extends IRepository<void, GetUncompletedTodosRepositoryOutput> {
  execute(): Promise<GetUncompletedTodosRepositoryOutput>;
}
