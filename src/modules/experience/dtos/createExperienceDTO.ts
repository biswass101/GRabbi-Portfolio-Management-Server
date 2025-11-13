import { IsNotEmpty, IsArray, ArrayNotEmpty } from "class-validator";

export class CreateExperienceDTO {
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsNotEmpty({ message: "Title is required" })
  title: string;

  @IsNotEmpty({ message: "Company is required" })
  company: string;

  @IsNotEmpty({ message: "Period is required" })
  period: string;

  @IsArray({ message: "Responsibilities must be an array" })
  @ArrayNotEmpty({ message: "At least one responsibility is required" })
  responsibilities: string[];
}
