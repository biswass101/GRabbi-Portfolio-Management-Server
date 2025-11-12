import { IsNotEmpty } from "class-validator";

export class CreateCertificationDTO {
  @IsNotEmpty({ message: "userId is required" })
  userId: string;

  @IsNotEmpty({ message: "Icon is required" })
  icon: string;

  @IsNotEmpty({ message: "Title is required" })
  title: string;

  @IsNotEmpty({ message: "Provider is required" })
  provider: string;

  @IsNotEmpty({ message: "Duration is required" })
  duration: string;
}
