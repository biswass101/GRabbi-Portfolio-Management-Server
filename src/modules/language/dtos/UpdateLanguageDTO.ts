import { IsOptional, IsNotEmpty } from "class-validator";

export class UpdateLanguageDTO {
  @IsOptional()
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsOptional()
  @IsNotEmpty({ message: "Language name is required" })
  language: string;

  @IsOptional()
  @IsNotEmpty({ message: "Writing level is required" })
  writing: string;

  @IsOptional()
  @IsNotEmpty({ message: "Reading level is required" })
  reading: string;

  @IsOptional()
  @IsNotEmpty({ message: "Speaking level is required" })
  speaking: string;
}
