import { IsNotEmpty } from "class-validator";

export class CreateInterestDTO {
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsNotEmpty({ message: "Title is required" })
  title: string;
}
