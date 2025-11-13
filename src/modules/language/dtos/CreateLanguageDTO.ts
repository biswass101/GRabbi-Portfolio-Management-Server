import { IsNotEmpty } from "class-validator";

export class CreateLanguageDTO {
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsNotEmpty({ message: "Language name is required" })
  language: string;

  @IsNotEmpty({ message: "Writing level is required" })
  writing: string;

  @IsNotEmpty({ message: "Reading level is required" })
  reading: string;

  @IsNotEmpty({ message: "Speaking level is required" })
  speaking: string;
}
