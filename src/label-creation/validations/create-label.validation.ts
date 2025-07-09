import type { inputDto } from "../../common/dtos/inputDto.js";
import type { IValidation } from "../../common/validations/validation.js";
import type { CreateLabelInput } from "../dtos/create-label.dto.js";

export interface ICreateLabelValidation extends IValidation<CreateLabelInput> {
  validate(input: inputDto<CreateLabelInput>): void;
}
