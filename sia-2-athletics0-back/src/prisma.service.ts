import { Injectable } from '@nestjs/common';
import { PrismaClient, Student } from '@prisma/client'; 

@Injectable()
export class PrismaService {
  constructor(private prisma: PrismaClient) {}

  async createStudent(data: any): Promise<Student> {
    return await this.prisma.student.create({ data });
  }

  async getAllStudents(): Promise<Student[]> {
    return await this.prisma.student.findMany();
  }
}
