import type { inputDto } from "common/dtos/inputDto.js";
import type { IValidation } from "common/validations/validation.js";
import type { GetLabelByIdInput } from "label-retrieval/dtos/get-label-by-id.dto.js";

export interface GetLabelByIdValidation extends IValidation<GetLabelByIdInput> {
  validate(input: inputDto<GetLabelByIdInput>): void;
}
