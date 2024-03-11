import { Controller, Get } from '@nestjs/common';
import { SportsService } from './sports.service';
import { SportCategory } from 'src/enums';

@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Get()
  findAllSports(): Promise<SportCategory[]> {
    return this.sportsService.getAllSportCategories();
  }
}
