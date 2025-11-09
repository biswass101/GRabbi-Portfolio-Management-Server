import { IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export enum UserRole {
  ADMIN = "admin",
}

export class UpdateUserDTO  {

  @IsOptional()
  @IsNotEmpty({ message: "Name is required" })
  name: string;
  
  @IsOptional()
  @IsEmail({}, { message: "Email must be valid" })
  @IsNotEmpty({ message: "Email is required" })
  email: string;
  
  @IsOptional()
  @MinLength(6, { message: "Password must be at least 6 characters" })
  @IsNotEmpty({ message: "Password is required" })
  password: string;
  
  @IsOptional()
  @IsEnum(UserRole, {
    message: "Role must be one of: admin, user, or manager",
  })
  
  @IsNotEmpty({ message: "Role is required" })
  role: UserRole;
}
