import { IsOptional } from "class-validator";

export class UpdateSoftSkillDTO {
  @IsOptional()
  userId?: string;

  @IsOptional()
  icon?: string;

  @IsOptional()
  title?: string;
}
