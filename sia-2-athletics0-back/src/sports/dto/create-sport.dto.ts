import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

enum SportCategory {
  MEN = 'MEN',
  WOMEN = 'WOMEN'
}

export class CreateSportDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(SportCategory)
  sportCategory: SportCategory;
}
