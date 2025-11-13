import { IsOptional, IsArray, IsNotEmpty } from "class-validator";

export class UpdateExperienceDTO {
  @IsOptional()
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsOptional()
  @IsNotEmpty({ message: "Title is required" })
  title: string;

  @IsOptional()
  @IsNotEmpty({ message: "Company is required" })
  company: string;

  @IsOptional()
  @IsNotEmpty({ message: "Period is required" })
  period: string;

  @IsOptional()
  @IsArray({ message: "Responsibilities must be an array" })
  responsibilities: string[];
}
