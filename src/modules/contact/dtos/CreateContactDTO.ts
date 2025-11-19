import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateContactDTO {
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsNotEmpty({ message: "Type is required" })
  type: string;

  @IsNotEmpty({ message: "Icon Url is required" })
  iconUrl: string;

  @IsNotEmpty({ message: "Detail is required" })
  detail: string;

  @IsOptional()
  @IsNotEmpty({ message: "Detail is required" })
  href: string;
}
