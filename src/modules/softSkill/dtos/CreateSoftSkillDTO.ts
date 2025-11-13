import { IsNotEmpty } from "class-validator";

export class CreateSoftSkillDTO {
  @IsNotEmpty({ message: "User ID is required" })
  userId: string;

  @IsNotEmpty({ message: "Icon is required" })
  icon: string;

  @IsNotEmpty({ message: "Title is required" })
  title: string;
}
