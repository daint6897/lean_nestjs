import { IsEmail, IsNumberString, IsString,IsNotEmpty,MinLength,MaxLength } from "class-validator";

export class CreateUserDto {
  
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255)
  username: string;
  
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255)
  email_address: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255)
  password: string;
}

