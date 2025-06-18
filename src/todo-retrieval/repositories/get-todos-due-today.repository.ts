import type { Repository } from "common/repositories/repository.js";
import type { ITodo } from "todo-entity";

export type GetTodosDueTodayRepositoryOutput = Array<ITodo>;

export interface GetTodosDueTodayRepository
  extends Repository<void, GetTodosDueTodayRepositoryOutput> {
  execute(): GetTodosDueTodayRepositoryOutput;
}
