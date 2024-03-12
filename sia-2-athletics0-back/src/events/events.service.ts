import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto) {
    return this.prisma.prismaClient.student.findMany();
  }

  findAll() {
    return this.prisma.prismaClient.events.findMany();
  }

  async findOne(id: number) {
    const event = this.prisma.prismaClient.events.findUnique({ where: {id },
    });

    if (!event) {
      throw new NotFoundException('Student with ID ${id} not found')
    }

    return event;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
