export type GetTodoByLabelInput = {
  labelId: string;
};

export type GetTodoByLabelOutput = Array<{
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  doneDate?: Date;
  labels?: Array<{ id: string; name: string; color: string | null }>;
}>;
