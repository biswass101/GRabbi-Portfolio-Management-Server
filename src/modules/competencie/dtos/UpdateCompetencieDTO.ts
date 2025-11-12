import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateCompetencieDTO  {
  @IsOptional()
  @IsNotEmpty({ message: "Icon is required" })
  icon: string;

  @IsOptional()
  @IsNotEmpty({ message: "Title is required" })
  title: string;

  @IsOptional()
  @IsNotEmpty({ message: "Description is required" })
  description: string;
}
