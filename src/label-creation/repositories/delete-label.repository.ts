import type { Repository } from "common/repositories/repository.js";
import type {
  DeleteLabelInput,
  DeleteLabelOutput,
} from "label-creation/dtos/delete-label.dto.js";

export interface DeleteLabelRepository
  extends Repository<DeleteLabelInput, DeleteLabelOutput> {
  execute(input: DeleteLabelInput): DeleteLabelOutput;
}
