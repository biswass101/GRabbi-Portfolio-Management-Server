import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateEducationtDTO {
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsNotEmpty({ message: "Degree is required" })
  degree: string;

  @IsNotEmpty({ message: "Institution is required" })
  institution: string;

  @IsNotEmpty({ message: "Major is required" })
  major: string;

  @IsNotEmpty({ message: "Year is required" })
  year: string;
}
