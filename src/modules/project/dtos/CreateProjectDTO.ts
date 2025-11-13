import { IsNotEmpty } from "class-validator";

export class CreateProjectDTO {
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsNotEmpty({ message: "Icon is required" })
  icon: string;

  @IsNotEmpty({ message: "Title is required" })
  title: string;

  @IsNotEmpty({ message: "Description is required" })
  description: string;

}
