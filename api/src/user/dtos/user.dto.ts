import { IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDTO {
  @IsString({ message: 'Name is required' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsDate()
  @IsNotEmpty()
  dob: Date;

  @IsString()
  @IsOptional()
  firstAid: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  postcode: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsString()
  @IsOptional()
  avatar: string;
}
