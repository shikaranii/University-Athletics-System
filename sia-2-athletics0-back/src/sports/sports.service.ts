import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SportsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSportDto: CreateSportDto) {
    return 'This action adds a new sport';
  }

  async findAll() {
    return this.prisma.prismaClient.sports.findMany();
  }

  async findOne(id: number) {
    const sport = this.prisma.prismaClient.sports.findUnique({ where: {id },
    });

    if (!sport) {
      throw new NotFoundException('Student with ID ${id} not found')
    }

    return sport;
  }

  update(id: number, updateSportDto: UpdateSportDto) {
    return `This action updates a #${id} sport`;
  }

  remove(id: number) {
    return `This action removes a #${id} sport`;
  }
}
