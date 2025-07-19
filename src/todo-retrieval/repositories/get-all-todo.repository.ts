import type { ITodo } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export type GetAllTodoRepositoryInput = {
  filters?: {
    done?: boolean;
    dueDate?: Date[];
  };
};
export type GetAllTodoRepositoryOutput = Array<ITodo>;

export interface IGetAllTodoRepository
  extends IRepository<GetAllTodoRepositoryInput, GetAllTodoRepositoryOutput> {
  execute(
    input: GetAllTodoRepositoryInput,
  ): Promise<GetAllTodoRepositoryOutput>;
}
