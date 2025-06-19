import type { IRepository } from "common/repositories/repository.js";
import type { ITodo } from "todo-entity";

export type GetTodosDueTodayRepositoryOutput = Array<ITodo>;

export interface GetTodosDueTodayRepository
  extends IRepository<void, GetTodosDueTodayRepositoryOutput> {
  execute(): GetTodosDueTodayRepositoryOutput;
}
