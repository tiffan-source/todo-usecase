import type { GetTodoByIdOutput } from "./get-todo-by-id.dto.js";

export type GetAllTodoInput = {
  filters?: {
    done?: boolean;
    dueDate?: Date[];
  };
};

export type GetAllTodoOutput = Array<GetTodoByIdOutput>;
