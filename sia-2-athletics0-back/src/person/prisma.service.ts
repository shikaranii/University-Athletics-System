// prisma.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    return this.prisma.person.create({ data: createPersonDto });
  }

  async findAll(): Promise<Person[]> {
    return this.prisma.person.findMany();
  }

  async findOne(id: number): Promise<Person | null> {
    return this.prisma.person.findUnique({ where: { id } });
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person> {
    return this.prisma.person.update({ where: { id }, data: updatePersonDto });
  }

  async remove(id: number): Promise<Person> {
    return this.prisma.person.delete({ where: { id } });
  }
}
