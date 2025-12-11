import { IsNotEmpty, IsString, IsBoolean, IsInt,IsOptional } from "class-validator";
export class CreateChildDto {
  @IsNotEmpty()
  @IsString()
  nev: string;
  @IsNotEmpty()
  @IsString()
  cim: string;
  @IsNotEmpty()
  @IsBoolean()
  jo: boolean;
  @IsOptional()
  @IsInt()
  gamesId ?: number;
}
