import {Min, IsNumber, IsNotEmpty, IsString } from "class-validator";

export class CreateToyDto {
  @IsString()
  @IsNotEmpty()
  name : string;
  @IsNotEmpty()
  @IsNumber()
  @Min(0.00000000001)
  weight : number;
  
  @IsNotEmpty()
  @IsString()
  material: string;
}
