import { IsEmail, IsEnum, IsNotEmpty, MinLength } from "class-validator";

export enum UserRole {
  ADMIN = "admin",
}

export class CreateUserDTO  {
  @IsNotEmpty({ message: "Name is required" })
  name: string;

  @IsEmail({}, { message: "Email must be valid" })
  @IsNotEmpty({ message: "Email is required" })
  email: string;

  @MinLength(6, { message: "Password must be at least 6 characters" })
  @IsNotEmpty({ message: "Password is required" })
  password: string;

  @IsEnum(UserRole, {
    message: "Role must be admin",
  })
  @IsNotEmpty({ message: "Role is required" })
  role: UserRole;
}
