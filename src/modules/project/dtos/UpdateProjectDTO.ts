import { IsOptional, IsNotEmpty } from "class-validator";

export class UpdateProjectDTO {
  @IsOptional()
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

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
