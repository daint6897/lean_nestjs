import { IsEmail, IsNumberString, IsString } from "class-validator";

export class CreateAddressDto {
  @IsString()
  line: string;
  
  @IsString()
  zipCode: string;
}

