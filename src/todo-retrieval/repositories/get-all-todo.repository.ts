import type { ITodo } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export type GetAllTodoRepositoryOutput = Array<ITodo>;

export interface IGetAllTodoRepository
  extends IRepository<void, GetAllTodoRepositoryOutput> {
  execute(): Promise<GetAllTodoRepositoryOutput>;
}
