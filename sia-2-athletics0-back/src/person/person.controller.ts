import { Controller, Post, Body } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    try {
      const createdPerson = await this.personService.create(createPersonDto);
      return { success: true, data: createdPerson };
    } catch (error) {
      return { success: false, message: 'Failed to create person' };
    }
  }
}
