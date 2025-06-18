import type { Repository } from "common/repositories/repository.js";
import type {
  CreateLabelInput,
  CreateLabelOutput,
} from "label-creation/dtos/create-label.dto.js";

export interface CreateLabelRepository
  extends Repository<CreateLabelInput, CreateLabelOutput> {
  excute(input: CreateLabelInput): CreateLabelOutput;
}
