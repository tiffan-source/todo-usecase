import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { DeleteLabelInput } from "label-creation/dtos/delete-label.dto.js";

export interface DeleteLabelValidation extends IValidation<DeleteLabelInput> {
  validate(input: inputDto<DeleteLabelInput>): void;
}
