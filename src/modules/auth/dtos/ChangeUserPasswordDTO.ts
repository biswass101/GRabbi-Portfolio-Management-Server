import { IsNotEmpty, MinLength } from "class-validator";

export class ChangeUserPasswordDTO {
  @MinLength(6, { message: "Old password must be at least 6 characters" })
  @IsNotEmpty({ message: "Old password is required" })
  oldPassword: string;

  @MinLength(6, { message: "New password must be at least 6 characters" })
  @IsNotEmpty({ message: "New password is required" })
  newPassword: string;
}
