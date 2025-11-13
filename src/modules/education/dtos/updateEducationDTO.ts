import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateEducationDTO {
  @IsOptional()
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsOptional()
  @IsNotEmpty({ message: "Degree is required" })
  degree: string;

  @IsOptional()
  @IsNotEmpty({ message: "Institution is required" })
  institution: string;

  @IsOptional()
  @IsNotEmpty({ message: "Major is required" })
  major: string;

  @IsOptional()
  @IsNotEmpty({ message: "Year is required" })
  year: string;
}
