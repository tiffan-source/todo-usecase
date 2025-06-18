export type GetTodoByLabelInput = {
  labelId: string;
};

export type GetTodoByLabelOutput = Array<{
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  labels?: Array<{ title: string; color: string | null }>;
}>;
