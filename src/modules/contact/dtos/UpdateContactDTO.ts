import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateContactDTO {
  @IsOptional()
  @IsNotEmpty({ message: "Type is required" })
  type: string;

  @IsOptional()
  @IsNotEmpty({ message: "Icon Url is required" })
  iconUrl: string;

  @IsOptional()
  @IsNotEmpty({ message: "Detail is required" })
  detail: string;

  @IsOptional()
  @IsNotEmpty({ message: "Detail is required" })
  href: string;
}
