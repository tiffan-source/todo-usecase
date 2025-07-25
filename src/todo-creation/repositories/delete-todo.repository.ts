import type { IRepository } from "../../common/repositories/repository.js";

export type DeleteTodoRepositoryInput = string;
export type DeleteTodoRepositoryOutput = boolean;

export interface IDeleteTodoRepository
  extends IRepository<DeleteTodoRepositoryInput, DeleteTodoRepositoryOutput> {
  execute(
    input: DeleteTodoRepositoryInput,
  ): Promise<DeleteTodoRepositoryOutput>;
}
