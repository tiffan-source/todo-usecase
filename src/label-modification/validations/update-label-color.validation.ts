import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { UpdateLabelColorInput } from "label-modification/dtos/update-label-color.dto.js";

export interface UpdateLabelColorValidation
  extends IValidation<UpdateLabelColorInput> {
  validate(input: inputDto<UpdateLabelColorInput>): void;
}
