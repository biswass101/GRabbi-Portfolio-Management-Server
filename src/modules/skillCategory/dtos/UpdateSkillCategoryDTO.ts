import { IsOptional, IsArray } from "class-validator";

export class UpdateSkillCategoryDTO {
  @IsOptional()
  userId?: string;

  @IsOptional()
  icon?: string;

  @IsOptional()
  title?: string;

  @IsOptional()
  @IsArray({ message: "Skills must be an array" })
  skills?: string[];
}
