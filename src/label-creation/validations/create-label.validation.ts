import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { CreateLabelInput } from "label-creation/dtos/create-label.dto.js";

export interface CreateLabelValidation extends IValidation<CreateLabelInput> {
  validate(input: inputDto<CreateLabelInput>): void;
}
