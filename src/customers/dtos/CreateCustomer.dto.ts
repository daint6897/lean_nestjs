import { Type } from "class-transformer";
import { IsEmail, IsNumberString, IsNotEmptyObject, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto"

export class CreateCustomerDto {
  @IsNumberString()
  id: string

  @IsEmail()
  email: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto
}

