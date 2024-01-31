import { Injectable } from '@nestjs/common';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { UpdateAthleteDto } from './dto/update-athlete.dto';

@Injectable()
export class AthletesService {
  create(createAthleteDto: CreateAthleteDto) {
    return 'This action adds a new athlete';
  }

  findAll() {
    return `This action returns all athletes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} athlete`;
  }

  update(id: number, updateAthleteDto: UpdateAthleteDto) {
    return `This action updates a #${id} athlete`;
  }

  remove(id: number) {
    return `This action removes a #${id} athlete`;
  }
}
