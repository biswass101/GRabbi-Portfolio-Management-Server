import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateCertificationDTO  {
  @IsOptional()
  @IsNotEmpty({ message: "Icon is required" })
  icon: string;

  @IsOptional()
  @IsNotEmpty({ message: "Title is required" })
  title: string;

  @IsOptional()
  @IsNotEmpty({ message: "Provider is required" })
  provider: string;

  @IsOptional()
  @IsNotEmpty({ message: "Duration is required" })
  duration: string;
}
