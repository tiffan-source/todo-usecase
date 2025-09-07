import type { ITodo } from "todo-entity";
import type { IRepository } from "../../common/repositories/repository.js";

export type GetAllTodoRepositoryInput = {
  filters?: {
    done?: boolean;
    dueDate?: Date[];
    labelsIds?: string[];
  };
};
export type GetAllTodoRepositoryOutput = Array<ITodo>;

export interface IGetAllTodoRepository extends IRepository {
  getAllTodos(
    input: GetAllTodoRepositoryInput,
  ): Promise<GetAllTodoRepositoryOutput>;
}
