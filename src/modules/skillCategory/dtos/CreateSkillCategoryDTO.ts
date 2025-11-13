import { IsNotEmpty, IsArray, ArrayMinSize } from "class-validator";

export class CreateSkillCategoryDTO {
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsNotEmpty({ message: "Icon is required" })
  icon: string;

  @IsNotEmpty({ message: "Title is required" })
  title: string;

  @IsArray({ message: "Skills must be an array" })
  @ArrayMinSize(1, { message: "At least one skill is required" })
  skills: string[];
}
