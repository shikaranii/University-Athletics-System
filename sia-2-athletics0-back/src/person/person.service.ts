import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from '@prisma/client';

@Injectable()
export class PersonService {
  constructor(private readonly prisma: PrismaService) {}

  async create(CreatePersonDto: CreatePersonDto): Promise<Person> {
    return this.prisma.getPrismaClient().person.create({ data: CreatePersonDto });
  }

  async findAll(): Promise<Person[]> {
    return this.prisma.getPrismaClient().person.findMany();
  }

  async findOne(id: number): Promise<Person | null> {
    return this.prisma.getPrismaClient().person.findUnique({ where: { id } });
  }

  async update(id: number, UpdatePersonDto: UpdatePersonDto): Promise<Person> {
    return this.prisma.getPrismaClient().person.update({ where: { id }, data: UpdatePersonDto });
  }

  async remove(id: number): Promise<Person> {
    return this.prisma.getPrismaClient().person.delete({ where: { id } });
  }
}
