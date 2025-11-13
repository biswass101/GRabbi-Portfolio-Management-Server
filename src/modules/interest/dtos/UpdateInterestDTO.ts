import { IsOptional, IsNotEmpty } from "class-validator";

export class UpdateInterestDTO {
  @IsOptional()
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsOptional()
  @IsNotEmpty({ message: "Title is required" })
  title: string;
}
