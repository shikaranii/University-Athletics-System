import { PartialType } from '@nestjs/mapped-types';
import { CreateSportDTO } from './create-sport.dto';

export class UpdateSportDto extends PartialType(CreateSportDTO) {}
