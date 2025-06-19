import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { UpdateLabelNameInput } from "label-modification/dtos/update-label-name.dto.js";

export interface UpdateLabelNameValidation
  extends IValidation<UpdateLabelNameInput> {
  validate(input: inputDto<UpdateLabelNameInput>): void;
}
